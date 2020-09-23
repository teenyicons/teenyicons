import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderX = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 6.5l4 4m-4 0l4-4m-9-4v10a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-6l-2-2h-4a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFolderX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolderX.displayName = "FolderX";

export default SvgFolderX;
