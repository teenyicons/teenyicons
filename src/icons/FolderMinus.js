import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderMinus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5 8.5h5m-9.5-6v10a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-6l-2-2h-4a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFolderMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolderMinus.displayName = "FolderMinus";

export default SvgFolderMinus;
