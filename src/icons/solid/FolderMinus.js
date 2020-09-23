import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderMinus = forwardRef(
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
          d="M0 2.5A1.5 1.5 0 011.5 1h4.207l2 2H13.5A1.5 1.5 0 0115 4.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-10zM5 9h5V8H5v1z"
          fill={color}
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
