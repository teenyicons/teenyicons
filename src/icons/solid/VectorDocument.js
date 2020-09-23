import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVectorDocument = forwardRef(
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
          d="M9 10v1H6v-1H5V7h1V6h3v1h1v3H9zM4 5v1h1V5H4zM10 5v1h1V5h-1zM4 12v-1h1v1H4zM10 11v1h1v-1h-1z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM3 4h3v1h3V4h3v3h-1v3h1v3H9v-1H6v1H3v-3h1V7H3V4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVectorDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVectorDocument.displayName = "VectorDocument";

export default SvgVectorDocument;
