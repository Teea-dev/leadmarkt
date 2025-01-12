import React from "react";

const WaitlistBanner = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-[#F5F5F5]">
      <div className="relative bg-teal-700 rounded-lg px-8 py-16 text-center">
        <svg
          className="absolute top-0 right-0"
          width="361"
          height="309"
          viewBox="0 0 361 309"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 -318C42.7232 -274.361 100.5 36 193.07 92.5757C285.64 149.151 294.02 93.1611 354.5 121C435.749 158.399 374.93 303.206 414 287.697"
            stroke="#FFD66B"
            strokeOpacity="0.1"
            strokeWidth="40"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0"
          width="286"
          height="217"
          viewBox="0 0 286 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-44 11C-17.4225 54.6119 -27 125.5 41 133C109 140.5 152.484 64.6784 217.5 92.5C304.843 129.876 236.5 343.5 278.5 328"
            stroke="#FFD66B"
            strokeOpacity="0.1"
            strokeWidth="40"
          />
        </svg>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Be First to Experience
          </h2>
          <h2 className="text-4xl font-bold text-white mb-8">LeadMarkt.</h2>
          <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200 inline-flex items-center group">
            Join the Waitlist
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBanner;
