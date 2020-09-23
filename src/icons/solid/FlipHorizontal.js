import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlipHorizontal = forwardRef(
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
          d="M3.237.075a.5.5 0 01.487-.022l8 4A.5.5 0 0111.5 5h-8a.5.5 0 01-.5-.5v-4a.5.5 0 01.237-.425zM0 8h15V7H0v1zM3.5 10a.5.5 0 00-.5.5v4a.5.5 0 00.724.447l8-4A.5.5 0 0011.5 10h-8z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFlipHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFlipHorizontal.displayName = "FlipHorizontal";

export default SvgFlipHorizontal;
