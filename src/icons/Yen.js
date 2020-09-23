import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgYen = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 15V7.5m0 0l-5-7m5 7l5-7M3 7.5h9m-9 4h9" stroke={color} />
      </svg>
    );
  }
);

SvgYen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgYen.displayName = "Yen";

export default SvgYen;
