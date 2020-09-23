import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgForwardSmall = forwardRef(
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
          d="M4.748 5.066A.5.5 0 004 5.5v4a.5.5 0 00.748.434L8 8.076V9.5a.5.5 0 00.748.434l3.5-2a.5.5 0 000-.868l-3.5-2A.5.5 0 008 5.5v1.424L4.748 5.066z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgForwardSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgForwardSmall.displayName = "ForwardSmall";

export default SvgForwardSmall;
