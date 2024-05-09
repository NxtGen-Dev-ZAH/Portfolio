import ContactForm from "@/components/ContactFrom";
import React from "react";

const Contact = () => {
  return (
    <div
      style={{ backgroundImage: "url(gradientpurple.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center "
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl  border-2 border-black shadow-2xl shadow-cyan-500"
      >
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
