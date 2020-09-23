import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLoop = forwardRef(
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
          d="M13.293 3L11.146.854l.708-.708 3 3a.5.5 0 010 .708l-3 3-.708-.708L13.293 4H3.5A2.5 2.5 0 001 6.5V8H0V6.5A3.5 3.5 0 013.5 3h9.793zM15 7v1.5a3.5 3.5 0 01-3.5 3.5H1.707l2.147 2.146-.708.708-3-3a.5.5 0 010-.707l3-3 .708.707L1.707 11H11.5A2.5 2.5 0 0014 8.5V7h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLoop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLoop.displayName = "Loop";

export default SvgLoop;
