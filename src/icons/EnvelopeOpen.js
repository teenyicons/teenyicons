import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEnvelopeOpen = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 5l7 3.5 7-3.5m0 .08v8.42a1 1 0 01-1 1h-12a1 1 0 01-1-1V5.08a1 1 0 01.504-.868l6-3.428a1 1 0 01.992 0l6 3.428a1 1 0 01.504.868z"
          stroke={color}
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
