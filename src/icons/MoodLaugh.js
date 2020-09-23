import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodLaugh = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 7.5V7a.5.5 0 00-.5.5h.5zm6 0h.5a.5.5 0 00-.5-.5v.5zm0-.5h-6v1h6V7zm-3 4C9.47 11 11 9.47 11 7.5h-1C10 8.918 8.918 10 7.5 10v1zM4 7.5C4 9.47 5.53 11 7.5 11v-1C6.082 10 5 8.918 5 7.5H4zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM4 6h1V5H4v1zm6 0h1V5h-1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMoodLaugh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodLaugh.displayName = "MoodLaugh";

export default SvgMoodLaugh;
