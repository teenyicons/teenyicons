import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPauseCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 5v5m2-5v5m-1 4.5a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPauseCircle.displayName = "PauseCircle";

export default SvgPauseCircle;
