import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSchool = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 4.5l4 2v8h-8v-8l4-2zm0 0V0M0 14.5h15m-13.5 0v-6h2m10 6v-6h-2m-5 6v-3h2v3m-1-14h3v2h-3m0 7a1 1 0 110-2 1 1 0 010 2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSchool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSchool.displayName = "School";

export default SvgSchool;
