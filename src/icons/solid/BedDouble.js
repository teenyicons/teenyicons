import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBedDouble = forwardRef(
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
        <path d="M0 0h15v6h-1V1H1v5H0V0z" fill={color} />
        <path
          d="M6 6H2V5h4v1zM0 15h1v-4h13v4h1V7H0v8zM9 6h4V5H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBedDouble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBedDouble.displayName = "BedDouble";

export default SvgBedDouble;
