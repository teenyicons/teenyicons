import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgButton = forwardRef(
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
          d="M4 6a3 3 0 010-6h7a3 3 0 110 6H9V3.5a2.5 2.5 0 00-5 0V6z"
          fill={color}
        />
        <path
          d="M6.5 2A1.5 1.5 0 005 3.5v4.55a2.5 2.5 0 00-2 2.45A4.5 4.5 0 007.5 15H8a5 5 0 005-5v-.853A2.147 2.147 0 0010.853 7H8V3.5A1.5 1.5 0 006.5 2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgButton.displayName = "Button";

export default SvgButton;
