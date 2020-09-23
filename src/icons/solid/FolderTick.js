import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFolderTick = forwardRef(
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
          d="M0 2.5A1.5 1.5 0 011.5 1h4.207l2 2H13.5A1.5 1.5 0 0115 4.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-10zm7.024 8.732l3.852-4.403-.752-.658-3.148 3.598-1.622-1.623-.708.708 2.378 2.378z"
          fill={color}
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
