import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBattery0 = forwardRef(
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
          d="M1.5 13A1.5 1.5 0 010 11.5v-8A1.5 1.5 0 011.5 2h10A1.5 1.5 0 0113 3.5v8a1.5 1.5 0 01-1.5 1.5h-10zM15 10V5h-1v5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBattery0.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBattery0.displayName = "Battery0";

export default SvgBattery0;
