import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodSurprised = forwardRef(
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
        <path d="M7 8a1 1 0 000 2h1a1 1 0 000-2H7z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 6h1V5H4v1zm6 0h1V5h-1v1zM5 9a2 2 0 012-2h1a2 2 0 110 4H7a2 2 0 01-2-2z"
          fill={color}
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
