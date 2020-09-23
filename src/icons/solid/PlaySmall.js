import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlaySmall = forwardRef(
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
          d="M6.748 5.066A.5.5 0 006 5.5v4a.5.5 0 00.748.434l3.5-2a.5.5 0 000-.868l-3.5-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlaySmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlaySmall.displayName = "PlaySmall";

export default SvgPlaySmall;
