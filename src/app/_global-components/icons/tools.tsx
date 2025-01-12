import React from "react";
import { IconTypes } from "./types.d";

const ToolsIcon = ({ width = 72, height = 73 }: IconTypes) => {
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
        d="M26 37.9286V32.5H46V37.9286C46 41.9692 46 43.9895 44.6983 45.2447C43.3965 46.5 41.3014 46.5 37.1111 46.5H34.8889C30.6986 46.5 28.6035 46.5 27.3017 45.2447C26 43.9895 26 41.9692 26 37.9286Z"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26 32.5L26.9615 30.1923C27.7073 28.4026 28.0801 27.5077 28.8359 27.0038C29.5917 26.5 30.5611 26.5 32.5 26.5H39.5C41.4389 26.5 42.4083 26.5 43.1641 27.0038C43.9199 27.5077 44.2927 28.4026 45.0385 30.1923L46 32.5"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M36 32.5V26.5"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M34 36.5H38"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default ToolsIcon;
