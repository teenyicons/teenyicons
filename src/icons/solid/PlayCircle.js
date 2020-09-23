import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlayCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm6.249-2.432a.5.5 0 01.5-.002l3.5 2a.5.5 0 010 .868l-3.5 2A.5.5 0 016 9.5v-4a.5.5 0 01.249-.432z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlayCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlayCircle.displayName = "PlayCircle";

export default SvgPlayCircle;
