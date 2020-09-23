import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinusSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M4 7.5h7" stroke={color} />
      </svg>
    );
  }
);

SvgMinusSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMinusSmall.displayName = "MinusSmall";

export default SvgMinusSmall;
