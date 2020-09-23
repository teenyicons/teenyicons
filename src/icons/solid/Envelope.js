import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEnvelope = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M.5 2.5A1.5 1.5 0 012 1h12a1.5 1.5 0 011.5 1.5v1.208L8 7.926.5 3.708V2.5z"
          fill={color}
        />
        <path
          d="M.5 4.855V12.5A1.5 1.5 0 002 14h12a1.5 1.5 0 001.5-1.5V4.855L8 9.074.5 4.854z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEnvelope.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEnvelope.displayName = "Envelope";

export default SvgEnvelope;
