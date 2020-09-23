import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderRadius = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10 1.5h1m2 0h1m-1 3h1m-1 3h1m-1 3h1m-1 3h1m-4 0h1m-4 0h1m-4 0h1m-4 0h1m-1-3h1M1.5 8V5.5a4 4 0 014-4H8"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBorderRadius.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderRadius.displayName = "BorderRadius";

export default SvgBorderRadius;
