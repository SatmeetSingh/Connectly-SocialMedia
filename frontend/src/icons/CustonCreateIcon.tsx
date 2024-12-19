import React from 'react';

export default function CustonCreateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="-1 -1 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Border */}
      <rect x="2" y="2" width="24" height="24" stroke="currentColor" />

      {/* Horizontal lines */}
      <line x1="5" y1="14" x2="22" y2="14" stroke="currentColor" />

      {/* Vertical lines */}
      <line x1="14" y1="5" x2="14" y2="22" stroke="currentColor" />
    </svg>
  );
}
