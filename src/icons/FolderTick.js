import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderTick = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5 8.5l2 2 3.5-4m-10-4v10a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-6l-2-2h-4a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFolderTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolderTick.displayName = "FolderTick";

export default SvgFolderTick;
