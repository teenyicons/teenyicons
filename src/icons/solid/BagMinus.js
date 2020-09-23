import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBagMinus = forwardRef(
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
          d="M7.5 1A2.5 2.5 0 005 3.5V4H4v-.5a3.5 3.5 0 117 0V4h-1v-.5A2.5 2.5 0 007.5 1z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.395 5a1.5 1.5 0 00-1.49 1.334l-.778 7A1.5 1.5 0 002.617 15h9.766a1.5 1.5 0 001.49-1.666l-.777-7A1.5 1.5 0 0011.606 5h-8.21zM5 9v1h5V9H5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBagMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBagMinus.displayName = "BagMinus";

export default SvgBagMinus;
