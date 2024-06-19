from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv, find_dotenv
import os

load_dotenv(find_dotenv())

login = os.environ.get("EMAIL_LOGIN")
password = os.environ.get("EMAIL_PASSWORD")
port = 2525
smtp_server = os.environ.get("SMTP_SERVER")
sender_email = os.environ.get("EMAIL_USER")
receiver_email = os.environ.get("RECEIVER_EMAIL")

app = FastAPI()

# Allow CORS for development purposes
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
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

    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = "New Contact Form Submission"

    body = f"""
    You have received a new message from your portfolio website:

    Name: {form_data.name}
    Email: {form_data.email}
    Message: {form_data.message}
    """
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP(smtp_server, port) as server:
            server.set_debuglevel(1)
            server.login(login, password=password)
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
