import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodFlat = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 5.5h1m5 0h1m-7 4h7m-3.5 5a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMoodFlat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodFlat.displayName = "MoodFlat";

export default SvgMoodFlat;
