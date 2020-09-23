import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodSad = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 6h1V5H4v1zm6 0h1V5h-1v1zm-5.1 4.3a3.25 3.25 0 015.2 0l.8-.6c-1.7-2.267-5.1-2.267-6.8 0l.8.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMoodSad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodSad.displayName = "MoodSad";

export default SvgMoodSad;
