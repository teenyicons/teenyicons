import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTickCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgTickCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTickCircle.displayName = "TickCircle";

export default SvgTickCircle;
