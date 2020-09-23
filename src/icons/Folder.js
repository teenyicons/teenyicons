import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolder = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 12.5v-10a1 1 0 011-1h4l2 2h6a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFolder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolder.displayName = "Folder";

export default SvgFolder;
