import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 md:p-8 bg-gradient-to-t from-purple-900 via-blue-950 to-slate-900 rounded-lg shadow-2xl shadow-purple-900">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white text-center">
        Contact Me
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-1 py-2 text-sm md:text-base text-black placeholder-gray-400 bg-white border-2 border-black rounded shadow"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-1 py-2 text-sm md:text-base text-black placeholder-gray-400 bg-white border-2 border-black rounded shadow"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-1 py-2 text-sm md:text-base text-black placeholder-gray-400 bg-white border-2 border-black rounded shadow"
        />
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 text-sm md:text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-600 hover:bg-blue-400 rounded-lg shadow-md">
          Send a message
        </button>
      </div>
      {status && <p className="text-center text-white mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;
