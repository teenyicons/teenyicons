import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBag = forwardRef(
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
        <path
          d="M5 3.5a2.5 2.5 0 015 0V4h1v-.5a3.5 3.5 0 10-7 0V4h1v-.5zM1.904 6.334A1.5 1.5 0 013.395 5h8.21a1.5 1.5 0 011.49 1.334l.779 7A1.5 1.5 0 0112.383 15H2.617a1.5 1.5 0 01-1.49-1.666l.777-7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBag.displayName = "Bag";

export default SvgBag;
