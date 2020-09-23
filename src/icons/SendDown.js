import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSendDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 13.5l-4-4m4 4l4-4m-4 4V3M14 1.5H1" stroke={color} />
      </svg>
    );
  }
);

SvgSendDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSendDown.displayName = "SendDown";

export default SvgSendDown;
