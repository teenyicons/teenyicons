import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeartCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 5.5l1 1 1-1a1.414 1.414 0 012 2l-3 3-3-3a1.414 1.414 0 012-2z"
          stroke={color}
        />
        <path d="M.5 7.5a7 7 0 1014 0 7 7 0 00-14 0z" stroke={color} />
      </svg>
    );
  }
);

SvgHeartCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeartCircle.displayName = "HeartCircle";

export default SvgHeartCircle;
