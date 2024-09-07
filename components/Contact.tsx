"use client";
import React, { useState, FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(5, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactUs(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      schema.parse(formData); // Validate the formData
      setSubmitStatus("Sending...");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", description: "" });
        setErrors({});
        setSubmitStatus("Message sent successfully!");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<FormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0] as keyof FormData) {
            newErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error("Error submitting form:", error);
        setSubmitStatus("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div
      style={{ backgroundImage: "url(gradientpurple.jpg)" }}
      className=" text-white min-h-screen bg-cover bg-center flex items-center justify-center pt-4"
    >
      <div className="rounded-xl  shadow-lg shadow-purple-500 p-4 md:p-8 border-opacity-50  border-gray-600 border-2  w-11/12 md:max-w-7xl lg:max-w-full mx-auto ">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-800 to-red-700 mb-6 w-fit">
              CONTACT US
            </h1>
            <p className="mb-4 text-sm md:text-base 2xl:text-lg">
              We at Thunderbird are looking to provide a solution to solve the
              software problems of the market. For this purpose, we have
              gathered a group of experts in various branches of the software
              field and relying on the knowledge acquired in the top
              universities and in the field
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm md:text-base 2xl:text-lg">
                  Office: 0319-3718710{" "}
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm md:text-base 2xl:text-lg">
                  Email: zaheerahmadabbasi167@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm md:text-base 2xl:text-lg">
                  Address: Rawalpindi, Pakistan
                </span>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 xl:text-lg"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-transparent rounded border focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  errors.name ? "border-red-500" : ""
                } placeholder:opacity-60 placeholder:text-sm xl:placeholder:text-base `}
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 xl:text-lg"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded border bg-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  errors.email ? "border-red-500" : ""
                } placeholder:opacity-60  placeholder:text-sm xl:placeholder:text-base`}
                placeholder="Enter your Email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1 xl:text-lg"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`w-full bg-transparent rounded border focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  errors.description ? "border-red-500" : ""
                } placeholder:opacity-60  placeholder:text-sm xl:placeholder:text-base`}
                placeholder="Please explain in more than 20 words"
              />
              {errors.description && (
                <span className="text-red-500 text-sm">
                  {errors.description}
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded text-lg"
              >
                Submit
              </button>
            </div>
            {submitStatus && (
              <div
                className={`text-center ${
                  submitStatus.includes("failed")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
