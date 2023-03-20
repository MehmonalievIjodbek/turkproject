import React from "react";

function FeatureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <rect width="48" height="48" x="4" y="4" fill="#D1E9FF" rx="24"></rect>
      <path
        stroke="#1570EF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M34 36V26m-6 10V20m-6 16v-6"
      ></path>
      <rect
        width="48"
        height="48"
        x="4"
        y="4"
        stroke="#EFF8FF"
        strokeWidth="8"
        rx="24"
      ></rect>
    </svg>
  );
}

export default FeatureIcon;
