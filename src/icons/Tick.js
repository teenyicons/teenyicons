import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTick = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M1 7l4.5 4.5L14 3" stroke={color} strokeLinecap="square" />
      </svg>
    );
  }
);

SvgTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTick.displayName = "Tick";

export default SvgTick;
