import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBold = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 7.5h5a3 3 0 100-6H3.58a.08.08 0 00-.08.08V7.5zm0 0h6a3 3 0 110 6H3.59a.09.09 0 01-.09-.09V7.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBold.displayName = "Bold";

export default SvgBold;
