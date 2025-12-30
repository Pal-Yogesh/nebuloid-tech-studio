"use client";

import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const services = [
    {
      name: "Web Development",
    },

    {
      name: "Mobile Application",
    },
    {
      name: "UI /UX Design",
    },
    {
      name: "Digital Marketing",
    },
    {
      name: "Branding Events",
    },
  ];

  const [activeService, setActiveService] = useState("Branding Events");

  const servicesData: Record<string, any> = {
    "Web Development": {
      title: "Web Development Services",
      subtitle: "Building Scalable & High-Performance Web Applications",
      description:
        "We specialize in creating responsive, fast, and secure websites tailored to your business needs. Our team uses the latest technologies to ensure your web presence is top-notch and engages your audience effectively.",
      deliverables: [
        "Custom Website Development",
        "E-commerce Solutions",
        "CMS Integration (WordPress, Contentful)",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Website Maintenance & Support",
      ],
      approach:
        "Our approach focuses on clean code, user-centric design, and performance optimization. We follow agile methodologies to deliver projects on time and within budget, ensuring every pixel is perfect.",
      whyChooseUs: [
        "Expert Full-Stack Developers",
        "Focus on SEO & Performance",
        "Scalable Architecture",
        "Security-First Mindset",
        "Dedicated Support Team",
      ],
      footerText: "Build Your Digital Future Today.",
      footerDescription:
        "Let's create a powerful web application that drives growth and establishes your brand's digital authority.",
      mainImage: "/website-designing.svg",
      sideImage: "/service-3-2.svg",
    },
    "Mobile Application": {
      title: "Mobile App Development",
      subtitle: "Innovative Mobile Solutions for iOS & Android",
      description:
        "We build intuitive and feature-rich mobile applications that provide seamless user experiences across all devices. From concept to deployment, we handle every aspect of the mobile app lifecycle.",
      deliverables: [
        "Native iOS & Android Apps",
        "Cross-Platform Development (React Native, Flutter)",
        "App Store Optimization (ASO)",
        "Mobile App UI/UX Design",
        "Backend Support for Apps",
        "App Testing & Quality Assurance",
      ],
      approach:
        "We combine cutting-edge technology with user-driven design to build apps that people love to use. Our process ensures high performance, security, and scalability for every app we build.",
      whyChooseUs: [
        "Intuitive User Interfaces",
        "High Performance & Stability",
        "End-to-end App Lifecycle Management",
        "Latest Tech Stack",
        "User-Centric Design Philosophy",
      ],
      footerText: "Your Business, Anywhere, Anytime.",
      footerDescription:
        "Connect with your customers on the go with a custom-built mobile application that stands out in the app store.",
      mainImage: "/website-designing.svg",
      sideImage: "/service-3-2.svg",
    },
    "UI /UX Design": {
      title: "UI / UX Design Services",
      subtitle: "Crafting Beautiful & Functional Digital Experiences",
      description:
        "We design interfaces that are not only visually stunning but also incredibly easy to use. Our goal is to create meaningful connections between your brand and your users through thoughtful design.",
      deliverables: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Interaction Design",
        "Usability Testing",
        "Design Systems Creation",
      ],
      approach:
        "Our design process is rooted in empathy and data. We start by understanding your users' needs and then iterate until we find the most effective and elegant solution.",
      whyChooseUs: [
        "User-Centric Design Process",
        "Expert Designers with Global Vision",
        "Iterative & Collaborative Workflow",
        "Focus on Accessibility & Inclusivity",
        "Seamless Handoff to Developers",
      ],
      footerText: "Design That Makes an Impact.",
      footerDescription:
        "Elevate your product with a UI/UX design that resonates with your audience and drives conversions.",
      mainImage: "/website-designing.svg",
      sideImage: "/service-3-2.svg",
    },
    "Digital Marketing": {
      title: "Digital Marketing Strategies",
      subtitle: "Data-Driven Growth for Your Online Presence",
      description:
        "We help brands grow their online footprint through targeted digital marketing campaigns. From SEO to social media, we use data to drive results and increase your ROI.",
      deliverables: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Pay-Per-Click Advertising (PPC)",
        "Content Marketing & Strategy",
        "Email Marketing Campaigns",
        "Analytics & Performance Tracking",
      ],
      approach:
        "We focus on understanding your audience's behavior and then reaching them where they are. Our campaigns are continuously optimized based on real-time performance data.",
      whyChooseUs: [
        "Data-Driven Decision Making",
        "Experienced Marketing Specialists",
        "Customized Strategies for Every Brand",
        "Transparent Reporting & Insights",
        "Focus on ROI & Growth",
      ],
      footerText: "Grow Your Brand Digitally.",
      footerDescription:
        "Partner with us to transform your digital marketing and reach your business goals through strategic online initiatives.",
      mainImage: "/website-designing.svg",
      sideImage: "/service-3-2.svg",
    },
    "Branding Events": {
      title: "Event Management (ATL & BTL Activities)",
      subtitle: "Creating Experiences That Inspire, Engage & Deliver Impact",
      description:
        "We plan and execute high-quality ATL & BTL events that amplify your brand's presence and connect you directly with your audience. From large-scale activations to intimate on-ground experiences, we bring ideas to life with precision and creativity.",
      deliverables: [
        "Brand Activations & Launch Events",
        "Corporate Events & Conferences",
        "Mall & Airport Activations",
        "Roadshows & Outdoor Promotions",
        "In-Store Marketing & Retail Branding",
        "Exhibition Stall Design & Fabrication",
        "Promo Campaigns & Sampling Activities",
        "Influencer & Community Engagements",
      ],
      approach:
        "We combine storytelling, strategic planning, and flawless execution to create memorable experiences. Every event is crafted to strengthen brand recall, boost engagement, and deliver measurable results.",
      whyChooseUs: [
        "Experienced on-ground execution team",
        "Creative concepts with practical implementation",
        "Strong vendor network for seamless delivery",
        "Timely coordination and end-to-end management",
        "Impact-focused planning aligned with brand goals",
      ],
      footerText: "Your Brand. Your Audience. One Unforgettable Experience.",
      footerDescription:
        "Let's bring your ideas to life through powerful on-ground and above-the-line activations.",
      mainImage: "/website-designing.svg",
      sideImage: "/service-3-2.svg",
    },
  };

  const currentData = servicesData[activeService];

  return (
    <>
      <div className="flex pt-14 items-start">
        <div className="mx-16 sticky top-10 h-fit">
          <div className="bg-[#F7F7F7] w-[510px] h-[430px]  px-10 py-8">
            <div>
              <h1 className="text-[#1D1D1D] text-[24px] font-semibold pb-5">
                Services List
              </h1>
            </div>
            {services.map((service) => (
              <div
                key={service.name}
                onClick={() => setActiveService(service.name)}
                className={`w-[380px] h-[50px] rounded-[8px] flex items-center px-5 my-3 cursor-pointer transition-colors ${
                  activeService === service.name
                    ? "bg-[#FFB71A] text-white"
                    : "bg-white text-[#292929]"
                }`}
              >
                <h1 className="text-[18px] ">{service.name}</h1>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="bg-[#F7F7F7] w-[510px] h-[165px]  px-10 py-8    ">
              <h1 className="font-semibold text-[24px] text-[#1D1D1D]">
                Social media
              </h1>

              <div className="flex items-center mt-5">
                <div className="bg-white w-[50px] h-[50px] flex items-center justify-center ">
                  <Image
                    src="/icon.svg"
                    alt="facebook"
                    width={1000}
                    height={1000}
                    className="w-[16px] h-[16px] cursor-pointer"
                  />
                </div>
                <div className="bg-[#1D1D1D14] w-[50px] h-[50px] flex items-center justify-center">
                  <Image
                    src="/prime_twitter.svg"
                    alt="facebook"
                    width={1000}
                    height={1000}
                    className="w-[16px] h-[16px] cursor-pointer"
                  />
                </div>
                <div className="bg-white w-[50px] h-[50px] flex items-center justify-center ">
                  <Image
                    src="/Symbol.svg"
                    alt="facebook"
                    width={1000}
                    height={1000}
                    className="w-[16px] h-[16px] cursor-pointer"
                  />
                </div>
                <div className="bg-[#1D1D1D14] w-[50px] h-[50px] flex items-center justify-center">
                  <Image
                    src="/lineicons_linkedin.svg"
                    alt="facebook"
                    width={1000}
                    height={1000}
                    className="w-[16px] h-[16px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="relative w-[510px] h-[450px] bg-[url('/bg.svg')] bg-cover bg-center  overflow-hidden">
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/60 z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-[32px] font-bold text-white leading-snug mb-6">
                  Have Any Query Feel <br />
                  Free Contact
                </h1>

                <a
                  href="tel:+917303922260"
                  className="bg-[#FFB71A] w-[220px] h-[65px] rounded-[10px] flex items-center justify-center gap-3 text-white text-[16px] font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <Image
                    src="/calll.svg"
                    alt="phone"
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  +91 7303922260
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div>
            <Image
              src={currentData.mainImage}
              alt="image"
              width={1000}
              height={1000}
              className="w-[90%] h-[520px] object-cover"
            />
          </div>
<div className="w-[90%]">

          <div className="text-[32px] pt-14  ">
            <h1 className="text-[32px] font-semibold">
              {currentData.title}
            </h1>
            <h1 className="text-[20px] font-semibold">
              {currentData.subtitle}
            </h1>
          </div>

          <div className="pt-12 ">
            <p className="text-[19px] text-[#434343]">
              {currentData.description}
            </p>
          </div>

          <div className="py-7">
            <h1 className="text-[20px]  text-[#1B1B1B] font-semibold">
              What We Deliver
            </h1>
            <ul className="list-disc list-inside py-4 text-[#434343]">
              {currentData.deliverables.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-[19px] text-[#020202] font-bold">
              Our Approach
            </h1>
            <p className="text-[19px] text-[#434343]">
              {currentData.approach}
            </p>
          </div>

          <div className=" flex items-center justify-center  gap-5">
            <div>
              <h1 className="text-[20px]  text-[#1B1B1B] font-semibold">
                Why choose us
              </h1>
              <ul className="list-disc list-inside py-4 text-[#434343]">
                {currentData.whyChooseUs.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h1 className="text-[19px] text-[#020202] font-bold pb-4">
                {currentData.footerText}
              </h1>

              <p className="text-[19px] text-[#4B4949]">
                {currentData.footerDescription}
              </p>
            </div>

            <div>
              <Image
                src={currentData.sideImage}
                alt="image"
                width={1000}
                height={1000}
                className="w-[321px] h-[388px]"
              />
            </div>
          </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Services;
