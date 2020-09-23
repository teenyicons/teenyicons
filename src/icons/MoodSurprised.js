import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodSurprised = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 5.5h1m5 0h1m-3.5 9a7 7 0 110-14 7 7 0 010 14zm-.5-7h1a1.5 1.5 0 110 3H7a1.5 1.5 0 110-3z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMoodSurprised.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodSurprised.displayName = "MoodSurprised";

export default SvgMoodSurprised;
