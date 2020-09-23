import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRewindSmall = forwardRef(
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
          d="M7 5.5a.5.5 0 00-.748-.434l-3.5 2a.5.5 0 000 .868l3.5 2A.5.5 0 007 9.5V8.076l3.252 1.858A.5.5 0 0011 9.5v-4a.5.5 0 00-.748-.434L7 6.924V5.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRewindSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRewindSmall.displayName = "RewindSmall";

export default SvgRewindSmall;
