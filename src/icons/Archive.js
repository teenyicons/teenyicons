import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArchive = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5 8.5h5M.5.5h14v4H.5v-4zm1 4v9a1 1 0 001 1h10a1 1 0 001-1v-9h-12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgArchive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArchive.displayName = "Archive";

export default SvgArchive;
