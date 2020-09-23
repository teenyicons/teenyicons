import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLaptop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 13.5h15M1.5 2.5v8a1 1 0 001 1h10a1 1 0 001-1v-8a1 1 0 00-1-1h-10a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLaptop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLaptop.displayName = "Laptop";

export default SvgLaptop;
