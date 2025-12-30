"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="">
        {/* Top Hire Section */}
        <div className='bg-[url("/footer1.svg")] bg-cover bg-center'>
          <div className="flex items-center justify-between px-20 py-8">
            <div className="text-white text-[46px] font-bold ">
              <h1>Think you&apos;re a great fit? Share your </h1>
              <h1>
                resume at{" "}
                <span className="text-white text-[46px] font-normal">
                  <a href="mailto:office@nebuloidtechstudio.com">
                    office@nebuloidtechstudio.com
                  </a>
                </span>
              </h1>
            </div>

            <div
              className="relative flex items-center justify-center gap-3 w-[180px] md:w-[220px] h-[70px] md:h-[80px] rounded-[6px] overflow-hidden group cursor-pointer transition-transform hover:scale-105 mr-20"
              style={{
                background:
                  "linear-gradient(96.77deg, rgba(134, 117, 81, 0.71) -2.93%, rgba(29, 29, 29, 0.71) 42.48%)",
              }}
            >
              <div
                className="absolute bottom-0 right-0 w-0 h-0 
                border-l-[28px] border-l-transparent 
                border-b-[28px] border-b-white"
              />

              <Image
                src="/emaill.svg"
                alt="email"
                width={45}
                height={45}
                className="w-[35px] md:w-[45px] h-[35px] md:h-[45px] z-10"
              />

              <button className="text-[20px] md:text-[27px] text-white font-semibold z-10 cursor-pointer">
                Email Us
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Section */}
        <div className="bg-[#1D1D1D] relative overflow-hidden">
          <div className="bg-[url('/footer2.svg')] bg-contain bg-no-repeat bg-center absolute inset-0 opacity-40 pointer-events-none"></div>

          <div className="relative z-10  px-20 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-white">
              {/* Column 1: Company Info */}
              <div>
                <Image
                  src="/logo.svg"
                  alt="Nebuloid Tech Studio Logo"
                  width={220}
                  height={110}
                  className="mb-8"
                />
                <p className="text-[16px] text-[#AFAFAF] leading-relaxed mb-8 max-w-[350px]">
                  Nebuloid Tech Studio is a modern creative-tech agency crafting
                  digital experiences that move brands forward. We blend
                  strategy, design, and technology to build solutions that are
                  visually striking, user-centric, and performance driven.
                </p>

                <div className="flex items-center mt-5">
                  <div className="bg-[#282828] w-[50px] h-[50px] flex items-center justify-center ">
                    <Image
                      src="/icon.svg"
                      alt="facebook"
                      width={1000}
                      height={1000}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="bg-[#343434] w-[50px] h-[50px] flex items-center justify-center">
                    <Image
                      src="/prime_twitter.svg"
                      alt="facebook"
                      width={1000}
                      height={1000}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="bg-[#282828] w-[50px] h-[50px] flex items-center justify-center ">
                    <Image
                      src="/Symbol.svg"
                      alt="facebook"
                      width={1000}
                      height={1000}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                  <div className="bg-[#343434] w-[50px] h-[50px] flex items-center justify-center">
                    <Image
                      src="/lineicons_linkedin.svg"
                      alt="facebook"
                      width={1000}
                      height={1000}
                      className="w-[16px] h-[16px]"
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Services */}
              <div className="lg:pl-10">
                <h3 className="text-[22px] font-bold mb-8">Services</h3>
                <ul className="space-y-4 text-[#AFAFAF] text-[16px]">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Web Development
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Mobile Application
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    UI / UX Design
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Digital Marketing
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Branding Events
                  </li>
                </ul>
              </div>

              {/* Column 3: Quick Links */}
              <div>
                <h3 className="text-[22px] font-bold mb-8">Quick Links</h3>
                <ul className="space-y-4 text-[#AFAFAF] text-[16px]">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Who We Are
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Service
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Projects
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Blog
                  </li>
                  <li className="hover:text-white transition-colors cursor-pointer">
                    Portfolio
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h3 className="text-[22px] font-bold mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin
                      className="text-[#AFAFAF] mt-1 shrink-0"
                      size={20}
                    />
                    <p className="text-[#AFAFAF] text-[16px]">
                      944, Block C, Sushant Lok Phase I,
                      <br />
                      Sector 43, Gurugram, Haryana
                      <br />
                      122001
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#AFAFAF] shrink-0" size={20} />
                    <p className="text-[#AFAFAF] text-[16px]">+91 7303922260</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-[#AFAFAF] shrink-0" size={20} />
                    <p className="text-[#AFAFAF] text-[16px]">
                      office@nebuloidtechstudio.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-14 pt-8 border-t border-[#2D2D2D] flex flex-wrap justify-between items-center gap-6">
              <p className="text-[#AFAFAF] text-[16px]">
                © Copyright 2025{" "}
                <span className="text-[#FFB71A]">
                  Nebuloid Tech Studios LLP
                </span>{" "}
                - All Rights Reserved.
              </p>

              <div
                className="relative bg-[#282828] w-[60px] h-[60px] flex items-center justify-center rounded-[4px] cursor-pointer hover:bg-[#FFB71A] group transition-all duration-300 overflow-hidden"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {/* Bottom-right triangle */}
                <div
                  className="absolute bottom-0 right-0 w-0 h-0
      border-l-[14px] border-l-transparent
      border-b-[14px] border-b-[#FFB71A]"
                />

                <ArrowUpRight
                  className="text-white group-hover:scale-110 transition-transform z-10"
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
