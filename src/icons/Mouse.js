import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMouse = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 4v3m0 7.5a5 5 0 01-5-5v-4a5 5 0 0110 0v4a5 5 0 01-5 5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMouse.displayName = "Mouse";

export default SvgMouse;
