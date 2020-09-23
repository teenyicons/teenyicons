import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFigma = forwardRef(
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
          d="M4 9.5a2.496 2.496 0 01-1-2c0-.818.393-1.544 1-2A2.5 2.5 0 015.5 1h4A2.5 2.5 0 0111 5.5a2.5 2.5 0 01-3 4v2a2.5 2.5 0 11-4-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFigma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFigma.displayName = "Figma";

export default SvgFigma;
