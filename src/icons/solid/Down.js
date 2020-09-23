import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDown = forwardRef(
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
        <path d="M7.5 12L0 4h15l-7.5 8z" fill={color} />
      </svg>
    );
  }
);

SvgDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDown.displayName = "Down";

export default SvgDown;
