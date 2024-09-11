import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useMediaQuery } from "react-responsive";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chaticon: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const toggleChat = (): void => setIsOpen(!isOpen);

  const handleSendMessage = (): void => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }]);
      setInputMessage("");
      // Simulate bot response (replace with actual chatbot logic)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Thanks for your message! This is a Zaheer Ahmed Portfolio! If you have any questions, please contact us by filling out the Contact Form.",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 601px)" });
  const messageCircleSize = isMobile ? 22 : isLargeScreen ? 32 : 32;
  const sendIconSize = isMobile ? 16 : isLargeScreen ? 20 : 20;

  return (
    <div className="fixed bottom-12 right-12 z-[100]">
      {isOpen ? (
        <div className="bg-purple-600 rounded-lg shadow-lg w-60 h-80 md:w-80 md:h-96 flex flex-col">
          <div className="bg-purple-600 p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-xl text-black tracking-widest">
              Chat With Me
            </h3>
            <button onClick={toggleChat} className="text-white">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 bg-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 text-black ${
                  message.sender === "user"
                    ? "text-right font-medium"
                    : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user" ? "bg-purple-400" : "bg-gray-100"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-gray-200">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputMessage(e.target.value)
                }
                placeholder="Type a message..."
                className="flex-1 border rounded-l-lg p-2 text-black border-yellow-400 w-full"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-500 text-white p-2 rounded-r-lg flex-shrink-0"
              >
                <Send size={sendIconSize} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
        >
          <MessageCircle size={messageCircleSize} />
        </button>
      )}
    </div>
  );
};

export default Chaticon;
