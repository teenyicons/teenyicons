import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeadphones = forwardRef(
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
          d="M2 6.5a5.5 5.5 0 1111 0V9h-.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1-1.415V6.5a6.5 6.5 0 10-13 0v2.585A1.5 1.5 0 000 10.5v3A1.5 1.5 0 001.5 15h1A1.5 1.5 0 004 13.5v-3A1.5 1.5 0 002.5 9H2V6.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHeadphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeadphones.displayName = "Headphones";

export default SvgHeadphones;
