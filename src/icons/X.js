import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgX = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M1.5 1.5l12 12m-12 0l12-12" stroke={color} />
      </svg>
    );
  }
);

SvgX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgX.displayName = "X";

export default SvgX;
