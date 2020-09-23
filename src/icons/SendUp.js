import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSendUp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 1.5l4 4m-4-4l-4 4m4-4V12M1 13.5h13" stroke={color} />
      </svg>
    );
  }
);

SvgSendUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSendUp.displayName = "SendUp";

export default SvgSendUp;
