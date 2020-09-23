import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTypescript = forwardRef(
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
          d="M0 0h15v15H0V0zm10 6a2 2 0 100 4h1a1 1 0 110 2h-1a1 1 0 01-1-1H8a2 2 0 002 2h1a2 2 0 100-4h-1a1 1 0 010-2h1.167c.46 0 .833.373.833.833V8h1v-.167C13 6.821 12.18 6 11.167 6H10zM3 6h5v1H6v6H5V7H3V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTypescript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTypescript.displayName = "Typescript";

export default SvgTypescript;
