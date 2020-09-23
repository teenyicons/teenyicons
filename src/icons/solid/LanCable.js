import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLanCable = forwardRef(
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
        <path d="M7 6.5V5h1v1.5a.5.5 0 01-1 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0h2v4h1v3.618L9.809 12H9v3H8v-3H7v3H6v-3h-.809L3 7.618V4h1V0h2v3h3V0zm0 4H6v2.5a1.5 1.5 0 103 0V4zM6 9v1h3V9H6z"
          fill={color}
        />
        <path d="M8 0H7v2h1V0z" fill={color} />
      </svg>
    );
  }
);

SvgLanCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLanCable.displayName = "LanCable";

export default SvgLanCable;
