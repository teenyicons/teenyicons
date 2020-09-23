import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBattery4 = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 11.5A1.5 1.5 0 001.5 13h10a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0011.5 2h-10A1.5 1.5 0 000 3.5v8zM3 4v7H2V4h1zm2 0v7H4V4h1zm2 7V4H6v7h1zm2-7v7H8V4h1z"
          fill={color}
        />
        <path d="M15 5v5h-1V5h1z" fill={color} />
      </svg>
    );
  }
);

SvgBattery4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBattery4.displayName = "Battery4";

export default SvgBattery4;
