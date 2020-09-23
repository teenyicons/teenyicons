import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodTongue = forwardRef(
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
        <path d="M6 10.5V9h3v1.5a1.5 1.5 0 01-3 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM5 6H4V5h1v1zm6 0h-1V5h1v1zM4 9h1v1.5a2.5 2.5 0 005 0V9h1V8H4v1z"
          fill={color}
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
