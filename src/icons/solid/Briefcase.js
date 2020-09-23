import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBriefcase = forwardRef(
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
          d="M5 2.5V3H1.5A1.5 1.5 0 000 4.5V11h15V4.5A1.5 1.5 0 0013.5 3H10v-.5a2.5 2.5 0 00-5 0zM7.5 1A1.5 1.5 0 006 2.5V3h3v-.5A1.5 1.5 0 007.5 1z"
          fill={color}
        />
        <path
          d="M15 12H0v1.5A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5V12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBriefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBriefcase.displayName = "Briefcase";

export default SvgBriefcase;
