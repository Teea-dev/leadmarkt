import React from "react";
import { IconTypes } from "./types.d";
const BoltIcon = ({ width = 16, height = 16 }: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33334 14.6666L6.00001 9.99992H2.66667L8.66667 1.33325H10L9.33334 6.66658H13.3333L6.66667 14.6666H5.33334Z"
        fill="#4C5C75"
      />
    </svg>
  );
};
export default BoltIcon;
