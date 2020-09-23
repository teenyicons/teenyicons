import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPause = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M5.5 3v9m4-9v9" stroke={color} />
      </svg>
    );
  }
);

SvgPause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPause.displayName = "Pause";

export default SvgPause;
