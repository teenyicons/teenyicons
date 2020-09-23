import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAt = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0v1a2.499 2.499 0 01-4.727 1.136A3.5 3.5 0 1111 7.5v1a1.5 1.5 0 003 0v-1a6.5 6.5 0 10-2.786 5.335l.572.82A7.5 7.5 0 010 7.5zm10 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAt.displayName = "At";

export default SvgAt;
