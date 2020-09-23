import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinusSmall = forwardRef(
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
          d="M11 8H4V7h7v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMinusSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMinusSmall.displayName = "MinusSmall";

export default SvgMinusSmall;
