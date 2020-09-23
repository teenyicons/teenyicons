import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPauseSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M6.5 5v5m2-5v5" stroke={color} />
      </svg>
    );
  }
);

SvgPauseSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPauseSmall.displayName = "PauseSmall";

export default SvgPauseSmall;
