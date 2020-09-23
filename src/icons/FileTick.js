import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFileTick = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5 7.5l2 2 3.5-4m0-5h-8a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1v-10l-3-3z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFileTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFileTick.displayName = "FileTick";

export default SvgFileTick;
