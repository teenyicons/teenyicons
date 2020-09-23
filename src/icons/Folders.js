import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolders = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 8.5v-7a1 1 0 011-1h3l2 2h4a1 1 0 011 1v5a1 1 0 01-1 1h-9m-1-1a1 1 0 001 1m-1-1v-3h-2a1 1 0 00-1 1v7a1 1 0 001 1h9a1 1 0 001-1v-4h-7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFolders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolders.displayName = "Folders";

export default SvgFolders;
