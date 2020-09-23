import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFrame = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M3.5 0v15m8-15v15M0 3.5h15m-15 8h15" stroke={color} />
      </svg>
    );
  }
);

SvgFrame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFrame.displayName = "Frame";

export default SvgFrame;
