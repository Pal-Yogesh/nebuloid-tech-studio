"use client";

import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const faqs = [
    {
      id: 0,
      question: "What is Nebuloid Tech Studio?",
      answer: "Nebuloid Tech Studio is a premier technology and creative agency specializing in delivering innovative digital solutions including web development, mobile apps, and branding.",
    },
    {
      id: 1,
      question: "Where is Nebuloid based?",
      answer: "We're headquartered in Gurugram, Haryana — but our creative and tech teams collaborate with clients across India and beyond.",
    },
    {
      id: 2,
      question: "What services does Nebuloid Tech Studio offer?",
      answer: "We offer a wide range of services including Web Development, Mobile Application Development, UI/UX Design, Digital Marketing, and Event Management (ATL & BTL).",
    },
    {
      id: 3,
      question: "Do you offer custom solutions or only predefined packages?",
      answer: "We specialize in fully custom solutions tailored to your specific business needs and goals. We don't believe in one-size-fits-all approaches.",
    },
  ];

  return (
    <div className="py-20 px-4 md:px-16 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side Section - Image Composition */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
          <div className="relative">
            <Image
              src="/faq.svg"
              alt="faq background"
              width={1000}
              height={1000}
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side Section - FAQ Content */}
        <div className="w-full lg:w-[50%] pt-10 lg:pt-0">
          <div className="mb-12">
            <h3 className="font-bold text-[24px] text-[#FFB71A] uppercase tracking-wider mb-4">
              FAQS
            </h3>
            <h1 className="font-bold text-[40px] md:text-[56px] text-[#1D1D1D] leading-[1.1] mb-6">
              Get The Solution For <br /> Your Queries
            </h1>
            <p className="text-[18px] text-[#434343] font-medium opacity-80">
              Let&apos;s solve your concerns with adequate answers.
            </p>
          </div>

          <div className="space-y-0">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="border-b border-gray-100 last:border-b-0 py-6"
              >
                <div 
                  className="flex items-start gap-6 cursor-pointer group"
                  onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                >
                  {/* Custom Radio Button */}
                  <div className="relative shrink-0 mt-1">
                    <div className={`w-[32px] h-[32px] rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      activeId === faq.id ? "border-[#FFB71A]" : "border-gray-400 group-hover:border-[#FFB71A]"
                    }`}>
                      {activeId === faq.id && (
                        <div className="w-[18px] h-[18px] rounded-full bg-[#FFB71A]"></div>
                      )}
                    </div>
                  </div>

                  {/* Question and Answer */}
                  <div className="flex-1">
                    <h2 className={`text-[20px] md:text-[24px] font-semibold transition-colors duration-300 ${
                      activeId === faq.id ? "text-[#1D1D1D]" : "text-[#1D1D1D]/80"
                    }`}>
                      {faq.question}
                    </h2>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeId === faq.id ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-[16px] md:text-[18px] text-[#434343] leading-relaxed max-w-[90%]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="cursor-pointer relative px-10 py-4 bg-[#FFB71A] text-white font-bold text-[18px] rounded-[10px] overflow-hidden group shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">View More</span>
              {/* Bottom shadow effect like in image */}
              <div className="absolute bottom-0 right-0 w-[15px] h-[15px] bg-[#D99A16] transform rotate-45 translate-x-[7px] translate-y-[7px]"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
