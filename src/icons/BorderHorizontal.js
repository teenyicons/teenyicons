import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1 1.5h1m5 0h1m2 0h1m2 0h1m-1 3h1m-7 0h1m5 6h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m-4 0h1m-4 0h1m-1-3h1m-1-6h1m2-3h1m-4 6h13"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBorderHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderHorizontal.displayName = "BorderHorizontal";

export default SvgBorderHorizontal;
