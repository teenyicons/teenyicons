import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrow = forwardRef(
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
          d="M4.5 0h-4a.5.5 0 00-.5.5v4a.5.5 0 00.854.354L2.5 3.207l11.646 11.647.708-.708L3.207 2.5 4.854.854A.5.5 0 004.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrow.displayName = "Arrow";

export default SvgArrow;
