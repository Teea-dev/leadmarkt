import React from "react";
import { IconTypes } from "./types.d";

const FavIcon = ({ width = 25, height = 25 }: IconTypes) => {
  return (
    <>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8174 24.2231C19.4448 24.2231 24.8174 18.8505 24.8174 12.2231C24.8174 5.59573 19.4448 0.223145 12.8174 0.223145C6.18995 0.223145 0.817383 5.59573 0.817383 12.2231C0.817383 18.8505 6.18995 24.2231 12.8174 24.2231ZM16.561 5.81325C16.7432 5.16597 16.115 4.78322 15.5414 5.19192L7.53325 10.8969C6.91111 11.3401 7.00897 12.2231 7.68025 12.2231H9.78901V12.2068H13.8989L10.5501 13.3884L9.07381 18.633C8.89159 19.2803 9.51967 19.6631 10.0934 19.2543L18.1015 13.5494C18.7237 13.1062 18.6257 12.2231 17.9545 12.2231H14.7566L16.561 5.81325Z"
          fill="#006E75"
        />
      </svg>
    </>
  );
};


export default FavIcon;

