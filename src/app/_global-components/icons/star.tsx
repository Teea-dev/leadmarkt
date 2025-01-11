import React from "react";
import { IconTypes } from "./types.d";

const StarIcon = ({ width = 14, height = 15 }: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.0714 2.63204C5.47007 1.46537 7.08207 1.43004 7.55474 2.52604L7.59474 2.63271L8.13274 4.20604C8.25603 4.56686 8.45527 4.89705 8.71702 5.17432C8.97877 5.4516 9.29694 5.66952 9.65007 5.81337L9.79474 5.86737L11.3681 6.40471C12.5347 6.80337 12.5701 8.41537 11.4747 8.88804L11.3681 8.92804L9.79474 9.46604C9.43379 9.58925 9.10348 9.78846 8.82608 10.0502C8.54869 10.312 8.33067 10.6302 8.18674 10.9834L8.13274 11.1274L7.5954 12.7014C7.19674 13.868 5.58474 13.9034 5.11274 12.808L5.0714 12.7014L4.53407 11.128C4.41086 10.7671 4.21165 10.4368 3.9499 10.1594C3.68814 9.88199 3.36993 9.66397 3.01674 9.52004L2.87274 9.46604L1.2994 8.92871C0.132069 8.53004 0.0967363 6.91804 1.19274 6.44604L1.2994 6.40471L2.87274 5.86737C3.23356 5.74408 3.56374 5.54484 3.84102 5.28309C4.11829 5.02134 4.33621 4.70317 4.48007 4.35004L4.53407 4.20604L5.0714 2.63204ZM6.3334 3.06271L5.79607 4.63604C5.60833 5.18624 5.30292 5.68891 4.90109 6.10904C4.49927 6.52917 4.0107 6.85666 3.4694 7.06871L3.30274 7.12937L1.7294 7.66671L3.30274 8.20404C3.85294 8.39178 4.35561 8.6972 4.77573 9.09902C5.19586 9.50084 5.52335 9.98941 5.7354 10.5307L5.79607 10.6974L6.3334 12.2707L6.87074 10.6974C7.05848 10.1472 7.36389 9.64451 7.76571 9.22438C8.16753 8.80425 8.65611 8.47676 9.1974 8.26471L9.36407 8.20471L10.9374 7.66671L9.36407 7.12937C8.81387 6.94163 8.3112 6.63622 7.89107 6.2344C7.47094 5.83258 7.14345 5.34401 6.9314 4.80271L6.8714 4.63604L6.3334 3.06271ZM11.6667 0.333374C11.7915 0.333374 11.9137 0.36836 12.0195 0.434355C12.1253 0.500351 12.2105 0.594709 12.2654 0.706707L12.2974 0.784708L12.5307 1.46871L13.2154 1.70204C13.3404 1.7445 13.45 1.82312 13.5302 1.92792C13.6105 2.03272 13.6578 2.15899 13.6663 2.29072C13.6747 2.42246 13.6438 2.55373 13.5775 2.6679C13.5113 2.78207 13.4126 2.874 13.2941 2.93204L13.2154 2.96404L12.5314 3.19737L12.2981 3.88204C12.2555 4.00699 12.1769 4.11651 12.072 4.1967C11.9672 4.2769 11.8409 4.32417 11.7092 4.33252C11.5774 4.34088 11.4462 4.30994 11.3321 4.24363C11.2179 4.17732 11.1261 4.07862 11.0681 3.96004L11.0361 3.88204L10.8027 3.19804L10.1181 2.96471C9.99308 2.92224 9.88351 2.84363 9.80325 2.73883C9.72299 2.63403 9.67564 2.50776 9.66722 2.37603C9.65879 2.24429 9.68967 2.11302 9.75592 1.99885C9.82218 1.88468 9.92084 1.79275 10.0394 1.73471L10.1181 1.70271L10.8021 1.46937L11.0354 0.784708C11.0804 0.652991 11.1654 0.538646 11.2786 0.457707C11.3918 0.376767 11.5276 0.333291 11.6667 0.333374Z"
        fill="#4C5C75"
      />
    </svg>
  );
};

export default StarIcon;