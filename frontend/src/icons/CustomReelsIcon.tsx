import React from 'react';

const ReelsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        ry="4"
        stroke="currentColor"
      />
      {/* Horizontal line inside  */}
      <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" />

      <line x1="9" y1="4" x2="9" y2="9" stroke="currentColor" />
      <line x1="16" y1="4" x2="16" y2="9" stroke="currentColor" />

      {/* Play button  */}
      <polygon
        points="10,13 10,19 16,15"
        stroke="currentColor"
        fill="currentColor"
      />
    </svg>
  );
};

export default ReelsIcon;
