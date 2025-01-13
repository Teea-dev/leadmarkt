import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#F4F4F4]">
      <div className=" flex  justify-between gap-16 max-w-6xl mx-auto mb-6">
        <div className="md:w-[50%] flex flex-col gap-10">
          <Image
            src="/images/logo.webp"
            alt="Leadmarkt logo"
            width={100}
            height={30}
            className="object-contain"
          />
          <p className="text-wrap text-[#4C5C75] text-base font-normal">
            Providing marketing tools to help businesses capture leads, boost
            convertions, and scale effortlessly.
          </p>
        </div>

        <div className="w-[70%] flex justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-[#000F1F] font-medium text-lg">Quick links </h3>
            <div className="flex flex-col gap-4">
              {["Home", "Features", "Why Choose Us", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#000F1F] font-medium text-lg">Socials</h3>
            <div className="flex flex-col gap-4">
              {["Facebook", "LinkedIn", "Instagram"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#000F1F] font-medium text-lg">Get In Touch</h3>
            <span className="flex flex-col gap-4" >
              <p className="text-wrap text-[#4C5C75] text-base font-normal flex gap-2">
                <Mail />
                info@webtech.com
              </p>
              <p className="text-wrap text-[#4C5C75] text-base font-normal flex gap-2">
                <Phone />
                (683) 710-2003
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
