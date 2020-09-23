import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAbTesting = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 11V6.5a2 2 0 114 0V11m-4-2.5h4m6.5-1H9.5m2.5 0a1.5 1.5 0 000-3H9.5v3m2.5 0a1.5 1.5 0 010 3H9.5v-3M7.5 1v13"
          stroke={color}
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
