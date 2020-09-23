import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLeftSmall = forwardRef(
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
        <path d="M4.793 7.5L9 11.707V3.293L4.793 7.5z" fill={color} />
      </svg>
    );
  }
);

SvgLeftSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLeftSmall.displayName = "LeftSmall";

export default SvgLeftSmall;
