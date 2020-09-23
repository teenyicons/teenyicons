import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBriefcaseAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 3v-.5a2 2 0 114 0V3m-9 3.5c3.706 4.235 10.294 4.235 14 0m-13-3h12a1 1 0 011 1v9a1 1 0 01-1 1h-12a1 1 0 01-1-1v-9a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBriefcaseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBriefcaseAlt.displayName = "BriefcaseAlt";

export default SvgBriefcaseAlt;
