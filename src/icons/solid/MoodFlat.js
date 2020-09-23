import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodFlat = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 6h1V5H4v1zm6 0h1V5h-1v1zm1 3v1H4V9h7z"
          fill={color}
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
