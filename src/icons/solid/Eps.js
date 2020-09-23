import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEps = forwardRef(
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
        <path d="M7 8h1V7H7v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM5 6H2v5h3v-1H3V9h2V8H3V7h2V6zm1 0h3v3H7v2H6V6zm4 0h3v1h-2v1h2v3h-3v-1h2V9h-2V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEps.displayName = "Eps";

export default SvgEps;
