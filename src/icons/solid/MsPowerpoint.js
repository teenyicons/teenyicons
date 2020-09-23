import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMsPowerpoint = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 5H2v5h1V9h2a2 2 0 100-4zm0 3H3V6h2a1 1 0 010 2z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 0a7.49 7.49 0 00-6 3A1.5 1.5 0 000 4.5v6A1.5 1.5 0 001.5 12a7.5 7.5 0 106-12zM1 4.5a.5.5 0 01.5-.5h6a.5.5 0 01.5.487v6.026a.5.5 0 01-.5.487h-6a.5.5 0 01-.5-.5v-6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMsPowerpoint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMsPowerpoint.displayName = "MsPowerpoint";

export default SvgMsPowerpoint;
