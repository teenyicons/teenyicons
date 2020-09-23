import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M1 10l6.5-7 6.5 7" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUp.displayName = "Up";

export default SvgUp;
