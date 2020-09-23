import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderX = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2.5A1.5 1.5 0 011.5 1h4.207l2 2H13.5A1.5 1.5 0 0115 4.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-10zm9.146 8.354L7.5 9.207l-1.646 1.647-.708-.707L6.793 8.5 5.146 6.854l.708-.708L7.5 7.793l1.646-1.647.708.708L8.207 8.5l1.647 1.646-.708.708z"
          fill={color}
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
