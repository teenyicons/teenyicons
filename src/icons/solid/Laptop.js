import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLaptop = forwardRef(
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
          d="M2.5 1A1.5 1.5 0 001 2.5v8A1.5 1.5 0 002.5 12h10a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0012.5 1h-10zM0 14h15v-1H0v1z"
          fill={color}
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
