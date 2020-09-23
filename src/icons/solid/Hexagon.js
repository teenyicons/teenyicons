import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHexagon = forwardRef(
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
          d="M14 4.213L7.5.42 1 4.213v6.574l6.5 3.792 6.5-3.792V4.213z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHexagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHexagon.displayName = "Hexagon";

export default SvgHexagon;
