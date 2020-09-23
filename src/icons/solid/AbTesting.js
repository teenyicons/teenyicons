import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAbTesting = forwardRef(
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
          d="M3.5 5A1.5 1.5 0 002 6.5V8h3V6.5A1.5 1.5 0 003.5 5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.5A1.5 1.5 0 011.5 1h4A1.5 1.5 0 017 2.5v10A1.5 1.5 0 015.5 14h-4A1.5 1.5 0 010 12.5v-10zM2 11V9h3v2h1V6.5a2.5 2.5 0 00-5 0V11h1z"
          fill={color}
        />
        <path
          d="M12 7h-2V5h2a1 1 0 110 2zM12 10h-2V8h2a1 1 0 110 2z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2.5A1.5 1.5 0 019.5 1h4A1.5 1.5 0 0115 2.5v10a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 018 12.5v-10zM12 4H9v7h3a2 2 0 001.323-3.5A2 2 0 0012 4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAbTesting.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAbTesting.displayName = "AbTesting";

export default SvgAbTesting;
