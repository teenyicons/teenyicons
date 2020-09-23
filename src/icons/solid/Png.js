import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPng = forwardRef(
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
        <path d="M3 8h.5a.5.5 0 000-1H3v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM2 6h1.5a1.5 1.5 0 110 3H3v2H2V6zm8 0h3v1h-2v3h1V8.5h1V11h-3V6zM7 8.618V11H6V6h1v.382l1 2V6h1v5H8v-.382l-1-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPng.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPng.displayName = "Png";

export default SvgPng;
