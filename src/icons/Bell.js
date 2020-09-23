import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBell = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1 10.5h13m-11.5 0v-5a5 5 0 0110 0v5m-7 1.5v.5a2 2 0 104 0V12"
          stroke={color}
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
