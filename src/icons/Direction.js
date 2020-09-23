import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDirection = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5.5l6 14 2-6 6-2-14-6z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgDirection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDirection.displayName = "Direction";

export default SvgDirection;
