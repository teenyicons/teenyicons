import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLine = forwardRef(
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
          d="M1.5 0a1.5 1.5 0 10.647 2.854l10 10a1.5 1.5 0 10.707-.707l-10-10A1.5 1.5 0 001.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLine.displayName = "Line";

export default SvgLine;
