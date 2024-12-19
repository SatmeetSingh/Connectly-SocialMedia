import React from 'react';

const CustomBorderIcon = () => {
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
      {/* Border */}
      <rect x="2" y="2" width="20" height="20" stroke="currentColor" />

      {/* Horizontal lines */}
      <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" />
      <line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" />
      {/* <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" /> */}

      {/* Vertical lines */}
      <line x1="9" y1="4" x2="9" y2="20" stroke="currentColor" />
      <line x1="16" y1="4" x2="16" y2="20" stroke="currentColor" />
      {/* <line x1="17" y1="4" x2="17" y2="20" stroke="currentColor" /> */}
    </svg>
  );
};

export default CustomBorderIcon;
