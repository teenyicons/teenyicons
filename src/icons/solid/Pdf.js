import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPdf = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M3.5 8H3V7h.5a.5.5 0 010 1zM7 10V7h.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H7z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM3.5 6H2v5h1V9h.5a1.5 1.5 0 100-3zm4 0H6v5h1.5A1.5 1.5 0 009 9.5v-2A1.5 1.5 0 007.5 6zm2.5 5V6h3v1h-2v1h1v1h-1v2h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPdf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPdf.displayName = "Pdf";

export default SvgPdf;
