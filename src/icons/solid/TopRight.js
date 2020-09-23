import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTopRight = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1h6v6h-1V2.707L1.854 13.854l-.708-.708L12.293 2H8V1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTopRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTopRight.displayName = "TopRight";

export default SvgTopRight;
