import ContactForm from "@/components/ContactFrom";
import React from "react";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: "url(gradientpurple.jpg)" }}
      className="w-full h-screen bg-cover bg-center flex items-center justify-center pt-4 "
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.png" }}
        className="h-[60%] md:h-[75%] w-[80%] md:w-[80%] max-w-lg relative bg-cover bg-center rounded-xl border-2 border-black shadow-2xl shadow-cyan-500"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full md:w-[70%] p-4 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
