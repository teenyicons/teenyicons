import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBriefcase = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 3v-.5a2 2 0 114 0V3m-9 8.5h14m-13-8h12a1 1 0 011 1v9a1 1 0 01-1 1h-12a1 1 0 01-1-1v-9a1 1 0 011-1z"
          stroke={color}
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
