import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNextSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 5.5l.248-.434A.5.5 0 004 5.5h.5zm0 4H4a.5.5 0 00.748.434L4.5 9.5zm3.5-2l.248.434a.5.5 0 000-.868L8 7.5zm-4-2v4h1v-4H4zm.748 4.434l3.5-2-.496-.868-3.5 2 .496.868zm3.5-2.868l-3.5-2-.496.868 3.5 2 .496-.868zM10 5v5h1V5h-1z"
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
