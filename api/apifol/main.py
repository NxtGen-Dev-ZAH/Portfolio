from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv, find_dotenv
import os
import openai
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from pydantic import BaseModel
from fastapi.responses import StreamingResponse

# from langchain_openai import ChatOpenAI
from langchain_openai import ChatOpenAI


load_dotenv(find_dotenv())

openai.api_key = os.getenv("OPENAI_API_KEY")
sender_email = os.getenv("GMAIL_ADDRESS")
sender_password = os.getenv("GMAIL_APP_PASSWORD")
receiver_email = os.getenv("RECEIVER_EMAIL")

app = FastAPI()

# Allow CORS for development purposes
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://zaheer-nxtgen-dev-zahs-projects.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str


def send_email(form_data: ContactForm):
    if not sender_email or not receiver_email:
        print(
            f"Environment variables not set properly: sender_email={sender_email}, receiver_email={receiver_email}"
        )
        raise HTTPException(status_code=500, detail="Email configuration error")

    body = f"""
    You have received a new message from your portfolio website:

    Name: {form_data.name}
    Email: {form_data.email}
    Message: {form_data.message}
    """
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    subject = f"New Contact Form Submission from {form_data.name}"
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.set_debuglevel(1)
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, msg.as_string())
            print("Email sent successfully")

    except smtplib.SMTPException as e:
        print(f"SMTP error: {e}")
        raise HTTPException(status_code=500, detail=f"Error sending email: {e}")
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {e}")


@app.post("/api/contact")
async def submit_contact_form(form: ContactForm, background_tasks: BackgroundTasks):
    try:
        background_tasks.add_task(send_email, form)
        return {"message": "Form submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit form: {e}")


from langchain.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)

# Load and process the PDF
pdf_path = r"D:\myportfolio\Zaheerdata.pdf"  # Replace with your PDF file path
loader = PyPDFLoader(pdf_path)
documents = loader.load()

# Split the documents into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=300,
    chunk_overlap=50,
    separators=["\n\n", "\n", "**", "*", ":", "."],
    length_function=len,
)
texts = text_splitter.split_documents(documents)

# Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(texts, embeddings)
retriever = vectorstore.as_retriever(search_type="similarity", k=2)


# Define the LLM (OpenAI model)
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3,
    streaming=True,
)


system_template = """You are a professional assistant for Zaheer's portfolio, focused solely on providing concise information about Zaheer and his work. Respond in three sentences or fewer, using only details from the provided portfolio data. For questions unrelated to Zaheer, politely suggest asking about his skills or projects instead. If the information isn't in your current data, simply state that you don't have that specific detail about Zaheer."""

human_template = """Use the following pieces of context to answer the question at the end.

Context: {context}

Question: {question}"""

chat_prompt = ChatPromptTemplate.from_messages(
    [
        SystemMessagePromptTemplate.from_template(system_template),
        HumanMessagePromptTemplate.from_template(human_template),
    ]
)


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


rag_chain = (
    {"context": retriever | format_docs, "question": RunnablePassthrough()}
    | chat_prompt
    | llm
    | StrOutputParser()
)


class ChatRequest(BaseModel):
    query: str


async def stream_response(query: str):
    async for chunk in rag_chain.astream(query):
        yield chunk


# async def stream_response(generator):
#     async for chunk in generator:
#         yield chunk["choices"][0]["delta"].get("content", "")


@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        # Log the incoming request
        print(f"Received request: {request.query}")
        print("Streaming response created")
        # generator = llm.stream({"prompt": request.query})

        # Create the streaming response
        return StreamingResponse(
            stream_response(request.query), media_type="text/event-stream"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# @app.post("/api/chat")
# async def chat(request: Query):
#     try:
# #         # Define the custom RAG prompt template
# #         template = """Use the following pieces of context to answer the question at the end.
# # If you don't know the answer, just say that you don't know, don't try to make up an answer.
# # Use three sentences maximum and keep the answer as concise as possible.
# # Always say "thanks for asking!" at the end of the answer.

# # {context}

# # Question: {question}

# # Helpful Answer:"""
# #         custom_rag_prompt = PromptTemplate.from_template(template)
# #         docs = retriever.invoke(request.query)
# #         print("we are printing docs *****************", docs)
# #         context = "\n".join([doc.page_content for doc in docs])
# #         print("We are printing context************************ ", context)

# #         # Create RAG chain
# #         rag_chain = (
# #             {"context": RunnablePassthrough(), "question": RunnablePassthrough()}
# #             | custom_rag_prompt
# #             | llm
# #             | StrOutputParser()
# #         )
# #         input_data = {"context": context, "question": request.query}

# #         # Generate response
# #         response = rag_chain.invoke(input_data)
#         docs = document_search
#         print(response)

#         return {"response": response["answer"]}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# chain = load_qa_chain(llm=llm, chain_type="stuff")

# query = "who is zaheer "
# docs = vectorstore.similarity_search(query)
# chain.invoke(docs, question=query)
# print(chain)
