import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBell = forwardRef(
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
          d="M7.5 0A5.5 5.5 0 002 5.5V10H1v1h13v-1h-1V5.5A5.5 5.5 0 007.5 0zM5 12.5V12h5v.5a2.5 2.5 0 01-5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBell.displayName = "Bell";

export default SvgBell;
