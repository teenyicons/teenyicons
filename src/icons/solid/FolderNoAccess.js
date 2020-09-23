import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderNoAccess = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M7.5 6a2.5 2.5 0 00-2.086 3.879L8.88 6.414A2.488 2.488 0 007.5 6zM7.5 11c-.51 0-.983-.152-1.379-.414L9.586 7.12A2.5 2.5 0 017.5 11z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.5A1.5 1.5 0 011.5 1h4.207l2 2H13.5A1.5 1.5 0 0115 4.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-10zm4 6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
          fill={color}
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
