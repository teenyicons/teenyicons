import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFileNoAccess = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 5.5l-4 4m5-9h-8a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-10l-3-3zm-3 10a3 3 0 110-6 3 3 0 010 6z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFileNoAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFileNoAccess.displayName = "FileNoAccess";

export default SvgFileNoAccess;
