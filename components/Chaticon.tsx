"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Minimize2,
  X,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Phone,
  User,
  Bot,
  HelpCircle,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ProfessionalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("chat");
  const [messages, setMessages] = useState([
    {
      text: "Welcome to Zaheer Portfolio support. How may I assist you today?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) {
      setIsDisliked(false); // Remove dislike if like is clicked
    }
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) {
      setIsLiked(false); // Remove like if dislike is clicked
    }
  };

  const handleQuickAction = (action: string) => {
    setMessages([
      ...messages,
      { text: `You selected: ${action}`, sender: "bot" },
    ]);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (inputText.trim()) {
      setMessages((prev) => [...prev, { text: inputText, sender: "user" }]);
      setInputText("");
      setIsLoading(true);
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: inputText }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!response.body) {
          throw new Error("Response body is null");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";
        setMessages((prev) => [...prev, { text: "", sender: "bot" }]);
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          fullText += chunk;
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullText;
            return newMessages;
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I encountered an error. Please try again later.",
            sender: "bot",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const renderChatSection = () => (
    <>
      <div className="h-72 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 max-w-3/4 p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-purple-100 text-purple-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.sender === "bot" && <Bot size={20} className="mt-1" />}
              {message.sender === "user" && <User size={20} className="mt-1" />}
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
              <Bot size={20} className="animate-pulse" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-purple-400 text-white p-2 rounded-lg hover:bg-purple-600 hover:text-gray-300 transition-colors"
            disabled={isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  );

  const renderFAQSection = () => (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      <h3 className="font-bold text-lg mb-2">Frequently Asked Questions</h3>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">
            How do you optimize AI models for real-time applications?
          </h4>
          <p className="text-sm text-gray-600">
            I use techniques such as model quantization, pruning, and
            distillation to reduce inference time and memory usage. For
            real-time AI applications, I utilize GPU/TPU acceleration and deploy
            models in cloud environments with serverless infrastructure to
            handle dynamic workloads efficiently.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">
            What is your approach to microservices architecture for large-scale
            applications?
          </h4>
          <p className="text-sm text-gray-600">
            I design scalable, event-driven microservices using Kafka for
            asynchronous communication and FastAPI for RESTful services. I also
            utilize Dapr for service-to-service communication and employ
            Protobuf for efficient message serialization.,
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">
            How do you handle complex AI and ML integrations in web
            applications?
          </h4>
          <p className="text-sm text-gray-600">
            I leverage frameworks like FastAPI, TensorFlow, and PyTorch for
            seamless AI/ML integration into web applications. I ensure optimized
            model performance through fine-tuning and employ tools like
            LangChain to enhance LLM-based applications with RAG
            (Retrieval-Augmented Generation).
          </p>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      <h3 className="font-bold text-lg mb-2">Contact Information</h3>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
          <Phone size={24} className="text-purple-500" />
          <div>
            <h4 className="font-semibold">Whatsapp Support</h4>
            <p className="text-sm text-gray-600">+92 347 5177267</p>
            <p className="text-xs text-gray-500">
              Monday - Friday, 9am - 4pm EST
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
          <MessageCircle size={24} className="text-purple-500" />
          <div>
            <h4 className="font-semibold">Email Support</h4>
            <p className="text-sm text-gray-600">dev.zaheer.ahmad@gmail.com</p>
            <p className="text-xs text-gray-500">
              24/7 support, response within 24 hours
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
          <Clock size={24} className="text-purple-500" />
          <div>
            <h4 className="font-semibold">Business Hours</h4>
            <p className="text-sm text-gray-600">
              Monday - Friday: 9am - 5pm EST
            </p>
            <p className="text-sm text-gray-600">Saturday: 11am - 3pm EST</p>
            <p className="text-sm text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-72 sm:w-80 overflow-hidden">
          <div className="bg-purple-500 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Professional Support</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-purple-600 p-1 rounded"
              >
                <Minimize2 size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-purple-600 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex ">
            <button
              onClick={() => setActiveSection("chat")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "chat" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveSection("faq")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "faq" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "contact" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              Contact
            </button>
          </div>
          {activeSection === "chat" && renderChatSection()}
          {activeSection === "faq" && renderFAQSection()}
          {activeSection === "contact" && renderContactSection()}
          <div className="bg-gray-50 p-3 flex justify-between items-center text-sm text-gray-500 border-t">
            <span>Rate the Conversation :</span>
            <button onClick={handleLike} className="focus:outline-none">
              <ThumbsUp
                size={24}
                className={`transition-colors ${
                  isLiked ? "text-pink-500" : "text-gray-400"
                }`}
              />
            </button>
            <button onClick={handleDislike} className="focus:outline-none">
              <ThumbsDown
                size={24}
                className={`transition-colors ${
                  isDisliked ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
