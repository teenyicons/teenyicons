import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path d="M3 7.5L11 0v15L3 7.5z" fill={color} />
      </svg>
    );
  }
);

SvgLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLeft.displayName = "Left";

export default SvgLeft;
