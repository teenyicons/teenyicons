import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgForwardSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.5 9.5v-4l3.5 2-3.5 2zM4.5 9.5v-4l3.5 2-3.5 2z"
          stroke={color}
          strokeLinejoin="round"
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
