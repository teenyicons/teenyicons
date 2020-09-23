import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodFrown = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 6h1V5H4v1zm1.82 5.035a7.278 7.278 0 014.368-1.092l.498.035.07-.998-.5-.034a8.278 8.278 0 00-4.966 1.241l-.424.266.531.847.424-.265zM11 6h-1V5h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMoodFrown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodFrown.displayName = "MoodFrown";

export default SvgMoodFrown;
