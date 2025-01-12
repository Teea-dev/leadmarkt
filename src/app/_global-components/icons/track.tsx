import React from "react";
import { IconTypes } from "./types.d";

const TrackIcon = ({ width = 72, height = 73 }: IconTypes) => {
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
        d="M35 30.5H45"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M35 36.5H45"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M35 42.5H45"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M27 31.8929C27 31.8929 28 32.5447 28.5 33.5C28.5 33.5 30 29.75 32 28.5"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27 42.8929C27 42.8929 28 43.5447 28.5 44.5C28.5 44.5 30 40.75 32 39.5"
        stroke="#4C5C75"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default TrackIcon;
