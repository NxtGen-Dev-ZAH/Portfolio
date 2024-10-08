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

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      setInputText("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thank you for your inquiry. I'm processing your request and will respond shortly.",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

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
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <div className="flex space-x-2 mb-2">
          <button
            onClick={() => handleQuickAction("Services")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            Services
          </button>
          <button
            onClick={() => handleQuickAction("Billing")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            Billing
          </button>
          <button
            onClick={() => handleQuickAction("Gen AI")}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            GEN AI
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition-colors"
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
          <h4 className="font-semibold mb-2">How do I reset my password?</h4>
          <p className="text-sm text-gray-600">
            To reset your password, go to the login page and click on the
            "Forgot Password" link. Follow the instructions sent to your email.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">
            What payment methods do you accept?
          </h4>
          <p className="text-sm text-gray-600">
            We accept all major credit cards, PayPal, and bank transfers for
            business accounts.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">How can I track my order?</h4>
          <p className="text-sm text-gray-600">
            Once your order is shipped, you'll receive a tracking number via
            email. You can use this number on our website or the courier's site
            to track your package.
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
            <h4 className="font-semibold">Phone Support</h4>
            <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
            <p className="text-xs text-gray-500">
              Monday - Friday, 9am - 5pm EST
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
          <MessageCircle size={24} className="text-purple-500" />
          <div>
            <h4 className="font-semibold">Email Support</h4>
            <p className="text-sm text-gray-600">support@company.com</p>
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
              Monday - Friday: 9am - 6pm EST
            </p>
            <p className="text-sm text-gray-600">Saturday: 10am - 4pm EST</p>
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
