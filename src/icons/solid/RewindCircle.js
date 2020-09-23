import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRewindCircle = forwardRef(
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
          d="M15 7.5a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0zm-4.249-2.432a.5.5 0 00-.5-.002L7 6.924V5.5a.5.5 0 00-.748-.434l-3.5 2a.5.5 0 000 .868l3.5 2A.5.5 0 007 9.5V8.076l3.252 1.858A.5.5 0 0011 9.5v-4a.5.5 0 00-.249-.432z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRewindCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRewindCircle.displayName = "RewindCircle";

export default SvgRewindCircle;
