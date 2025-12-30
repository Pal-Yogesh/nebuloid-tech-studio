import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="border-b border-bg-to-r-[#616161] to-[#FFAE00]">
      <div className="text-white text-[14px] flex justify-between items-center  px-20 py-4 ">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/phone.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[20px] h-[20px]"
            />
            <a href="tel:+917303922260">+91 7303922260</a>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/email.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[20px] h-[20px]"
            />
            <a href="mailto:office@nebuloidtechstudio.com">
              office@nebuloidtechstudio.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/facebook.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
          <div>
            <Image
              src="/instagram.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
          <div>
            <Image
              src="/linkedin.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
          <div>
            <Image
              src="/twitter.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Who We Are",
      href: "/who-we-are",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
  ];
  return (
    <>
      <div
        className="text-white font-bold text-[16px]"
        style={{
          background: "linear-gradient(90deg, #1D1D1D 47.6%, #FFB71A 136.53%)",
        }}
      >
        <TopNavbar />
        <div className="flex items-center justify-between px-20 py-4">
          <div>
            <Image
              src="/logo.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[170px] h-[85px]"
            />
          </div>

          <div className="flex items-center gap-9">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name} className="hover:underline">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="bg-[#343435D4] cursor-pointer border border-[#CDC9C9] rounded-[6px] flex items-center justify-center gap-2 p-2">
            <button className="text-[13px] cursor-pointer">Get In Touch</button>
            <div className="bg-[#FFFFFF] w-[20px] h-[20px] rounded-[6px] flex items-center justify-center">
              <MoveRight className="text-[#1D1D1D] w-[12px] h-[19px] font-bold" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
