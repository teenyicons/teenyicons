import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHexagon = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M1.5 4.5v6l6 3.5 6-3.5v-6L7.5 1l-6 3.5z" stroke={color} />
      </svg>
    );
  }
);

SvgHexagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHexagon.displayName = "Hexagon";

export default SvgHexagon;
