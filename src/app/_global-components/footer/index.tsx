import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 mt-10 sm:mt-16 md:mt-20 bg-[#F4F4F4]">
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div  className="w-full lg:w-[40%] flex flex-col gap-6 md:gap-10">
            <Image
              src="/images/logo.webp"
              alt="Leadmarkt logo"
              width={100}
              height={30}
              className="object-contain"
            />
            <p className="text-[#4C5C75] text-sm sm:text-base font-normal">
              Providing marketing tools to help businesses capture leads, boost
              convertions, and scale effortlessly.
            </p>
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-[#000F1F] font-medium text-base sm:text-lg">
                Quick links
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {["Home", "Features", "Why Choose Us", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-[#000F1F] font-medium text-base sm:text-lg">
                Socials
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {["Facebook", "LinkedIn", "Instagram"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 col-span-2 md:col-span-1">
              <h3 className="text-[#000F1F] font-medium text-base sm:text-lg">
                Get In Touch
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#4C5C75] text-sm sm:text-base font-normal flex items-center gap-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  info@webtech.com
                </p>
                <p className="text-[#4C5C75] text-sm sm:text-base font-normal flex items-center gap-2">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  (683) 710-2003
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h3 className="text-[#4C5C75] text-sm sm:text-base font-normal text-center sm:text-left">
            © 2024 Leadmarkt. All rights reserved
          </h3>
          <div className="flex items-center gap-4 sm:gap-10 text-[#4C5C75] text-sm sm:text-base font-normal">
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
