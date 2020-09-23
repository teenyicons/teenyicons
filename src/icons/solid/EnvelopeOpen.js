import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEnvelopeOpen = forwardRef(
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
          d="M6.756.35a1.5 1.5 0 011.488 0l6 3.428a1.5 1.5 0 01.408.341L7.5 7.933.348 4.12c.113-.135.25-.251.408-.341l6-3.429z"
          fill={color}
        />
        <path
          d="M0 5.067V13.5A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5V5.08v-.013l-7.5 4-7.5-4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEnvelopeOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEnvelopeOpen.displayName = "EnvelopeOpen";

export default SvgEnvelopeOpen;
