import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgForwardCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm4.249-2.432a.5.5 0 01.5-.002L8 6.924V5.5a.5.5 0 01.748-.434l3.5 2a.5.5 0 010 .868l-3.5 2A.5.5 0 018 9.5V8.076L4.748 9.934A.5.5 0 014 9.5v-4a.5.5 0 01.249-.432z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgForwardCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgForwardCircle.displayName = "ForwardCircle";

export default SvgForwardCircle;
