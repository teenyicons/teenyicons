import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodLaugh = forwardRef(
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
          d="M7.5 10c-1.246 0-2.233-.835-2.454-2h4.908c-.221 1.165-1.208 2-2.454 2z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM4 6h1V5H4v1zm.5 1a.5.5 0 00-.5.5C4 9.47 5.53 11 7.5 11S11 9.47 11 7.5a.5.5 0 00-.5-.5h-6zM11 6h-1V5h1v1z"
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
