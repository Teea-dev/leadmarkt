import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Features = () => {
  return (
    <section className="w-full py-16 px-4 bg-[#F4F4F4]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-6">
        <div>
          <Image
            src="/images/logo.webp"
            alt="Leadmarkt logo"
            width={100}
            height={30}
            className="object-contain"
          />
          <p>
            Providing marketing tools to help businesses capture leads, boost
            convertions, and scale effortlessly.
          </p>
        </div>

        <div>
          <div>
            <h3>Quick links </h3>
            <div>
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
          <div>
            <h3>Socials</h3>
            <div>
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
          <div>
            <h3>Get In Touch</h3>
            
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-6xl mx-auto"></div>
    </section>
  );
};

export default Features;
