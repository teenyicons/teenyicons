import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNextCircle = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM10 5h1v5h-1V5zm-5.252.066A.5.5 0 004 5.5v4a.5.5 0 00.748.434l3.5-2a.5.5 0 000-.868l-3.5-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNextCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNextCircle.displayName = "NextCircle";

export default SvgNextCircle;
