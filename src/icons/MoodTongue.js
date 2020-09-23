import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodTongue = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 5.5h1m5 0h1m-7 3h7m-5.5 0v2a2 2 0 104 0v-2m-2 6a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMoodTongue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodTongue.displayName = "MoodTongue";

export default SvgMoodTongue;
