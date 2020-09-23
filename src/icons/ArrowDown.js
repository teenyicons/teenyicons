import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 13.5l4-4m-4 4l-4-4m4 4V1" stroke={color} />
      </svg>
    );
  }
);

SvgArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowDown.displayName = "ArrowDown";

export default SvgArrowDown;
