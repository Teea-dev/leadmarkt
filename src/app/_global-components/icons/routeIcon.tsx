import React from "react";
import { IconTypes } from "./types.d";

const RouteIcon = ({ width = 72, height = 73 }: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 72 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="72" height="72" rx="36" fill="#F4F6F8" />
      <path
        d="M42 32.5C43.6569 32.5 45 31.1569 45 29.5C45 27.8431 43.6569 26.5 42 26.5C40.3431 26.5 39 27.8431 39 29.5C39 31.1569 40.3431 32.5 42 32.5Z"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 46.5C31.6569 46.5 33 45.1569 33 43.5C33 41.8431 31.6569 40.5 30 40.5C28.3431 40.5 27 41.8431 27 43.5C27 45.1569 28.3431 46.5 30 46.5Z"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 29.5H32.5C30.567 29.5 29 31.067 29 33C29 34.933 30.567 36.5 32.5 36.5H39.5C41.433 36.5 43 38.067 43 40C43 41.933 41.433 43.5 39.5 43.5H36"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RouteIcon;
