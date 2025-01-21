import React from "react";

const WaitlistBanner = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden bg-[#F5F5F5]">
      <div className="relative bg-teal-700 rounded-lg px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 text-center">
        <svg
          className="absolute top-0 right-0 w-48 sm:w-64 md:w-auto transform scale-75 sm:scale-90 md:scale-100"
          width="361"
          height="309"
          viewBox="0 0 361 309"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18 -318C42.7232 -274.361 100.5 36 193.07 92.5757C285.64 149.151 294.02 93.1611 354.5 121C435.749 158.399 374.93 303.206 414 287.697"
            stroke="#FFD66B"
            strokeOpacity="0.1"
            strokeWidth="40"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-auto transform scale-75 sm:scale-90 md:scale-100"
          width="286"
          height="217"
          viewBox="0 0 286 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-44 11C-17.4225 54.6119 -27 125.5 41 133C109 140.5 152.484 64.6784 217.5 92.5C304.843 129.876 236.5 343.5 278.5 328"
            stroke="#FFD66B"
            strokeOpacity="0.1"
            strokeWidth="40"
          />
        </svg>

        <div className="relative z-10 max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            Be First to Experience
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            LeadMarkt.
          </h2>

          <button
            className="bg-white text-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium 
            hover:bg-teal-50 transition-all duration-200 
            inline-flex items-center justify-center group
            text-sm sm:text-base
            shadow-sm hover:shadow-md
            w-full sm:w-auto"
          >
            Join the waitlist
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
