import React from "react";
import { IconTypes } from "./types.d";

const BoostIcon = ({ width = 72, height = 73 }: IconTypes) => {
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
        d="M35.8013 30.9895L37.2869 29.5039C38.9596 27.8312 41.1495 27.1374 43.4671 27.024C44.3686 26.9799 44.8193 26.9578 45.1807 27.3193C45.5422 27.6807 45.5201 28.1314 45.476 29.0329C45.3626 31.3505 44.6688 33.5404 42.9961 35.2131L41.5105 36.6987C40.2871 37.9221 39.9393 38.27 40.1961 39.597C40.4496 40.6107 40.6949 41.5923 39.9578 42.3294C39.0637 43.2235 38.2481 43.2235 37.354 42.3294L30.1706 35.146C29.2765 34.2519 29.2765 33.4363 30.1706 32.5422C30.9077 31.8051 31.8893 32.0504 32.903 32.3039C34.23 32.5607 34.5779 32.2129 35.8013 30.9895Z"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M40.9958 31.5H41.0049"
        stroke="#4C5C75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5 46L31.5 41"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32.5 46L34.5 44"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M26.5 40L28.5 38"
        stroke="#4C5C75"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BoostIcon;
