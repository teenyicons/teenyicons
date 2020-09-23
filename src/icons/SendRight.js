import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSendRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M13.5 7.5l-4 4m4-4l-4-4m4 4H3M1.5 1v13" stroke={color} />
      </svg>
    );
  }
);

SvgSendRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSendRight.displayName = "SendRight";

export default SvgSendRight;
