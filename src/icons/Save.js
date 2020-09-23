import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSave = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 14.5v-3a1 1 0 011-1h4a1 1 0 011 1v3m3 0h-12a1 1 0 01-1-1v-12a1 1 0 011-1h8.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V13.5a1 1 0 01-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSave.displayName = "Save";

export default SvgSave;
