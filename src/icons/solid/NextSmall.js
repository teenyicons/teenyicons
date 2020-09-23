import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNextSmall = forwardRef(
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
          d="M4.748 5.066A.5.5 0 004 5.5v4a.5.5 0 00.748.434l3.5-2a.5.5 0 000-.868l-3.5-2zM10 10h1V5h-1v5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNextSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNextSmall.displayName = "NextSmall";

export default SvgNextSmall;
