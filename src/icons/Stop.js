import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M11.5 3.5h-8v8h8v-8z" stroke={color} />
      </svg>
    );
  }
);

SvgStop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStop.displayName = "Stop";

export default SvgStop;
