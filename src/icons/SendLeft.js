import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSendLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M1.5 7.5l4-4m-4 4l4 4m-4-4H12m1.5 6.5V1" stroke={color} />
      </svg>
    );
  }
);

SvgSendLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSendLeft.displayName = "SendLeft";

export default SvgSendLeft;
