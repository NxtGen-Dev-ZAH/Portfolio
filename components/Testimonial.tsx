import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Syed Waqas Shah ",
    position: "CTO, Thunderbird Technologies",
    content:
      "Working with this individual was a game-changer for our project. His expertise in AI and web development brought our vision to life.",
    // image: "/john-doe.jpg",
  },
  {
    name: "Haris Morris",
    position: "Senior Dev, StartUp Creators",
    content:
      "Zaheer's expertise in full-stack development helped us launch a scalable product in record time. His professionalism and commitment to excellence are unparalleled.",
  },
  {
    name: "Adeel Ahmed",
    position: "CEO & CTO , Datasaz Solutions",
    content:
      "The data science solutions provided by him significantly improved our decision-making process. Highly recommended!",
    // image: "/jane-smith.jpg",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, AI and machine learning solutions, DevOps, and data science and analytics.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. We work closely with our clients to establish realistic timelines and milestones.",
  },
  {
    question: "What kind of clients do you typically work with?",
    answer:
      "I collaborate with a wide range of clients, from startups to large enterprises, providing custom web solutions, Cloud computing , and AI integrations tailored to their business needs.",
  },
  {
    question: "What tools and technologies do you specialize in?",
    answer:
      "I specialize in a range of technologies including Next.js, React, Tailwind CSS, Node.js, FastAPI, PostgresSql ,Kafka , Kong and more. I am also experienced with cloud platforms like AWS,Azure and Firebase for deployment and scalability.",
  },
];

const TestimonialsAndFAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref);

            return (
              <motion.div
                ref={ref}
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { scale: 0.5, opacity: 0.5 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-purple-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            );
          })}
        </div>

        <h2 className="text-4xl font-bold text-center mt-20 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref);

            return (
              <motion.div
                ref={ref}
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { scale: 0.5, opacity: 0.5 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-gray-800 rounded-lg focus:outline-none"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    {activeIndex === index ? (
                      <svg
                        className="h-6 w-6 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 text-purple-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="mt-2 p-4 bg-gray-700 rounded-lg">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndFAQs;
