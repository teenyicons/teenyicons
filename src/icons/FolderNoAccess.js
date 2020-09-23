import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderNoAccess = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 6.5l-4 4m-5-8v10a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-6l-2-2h-4a1 1 0 00-1 1zm7 9a3 3 0 110-6 3 3 0 010 6z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFolderNoAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFolderNoAccess.displayName = "FolderNoAccess";

export default SvgFolderNoAccess;
