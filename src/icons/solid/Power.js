import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPower = forwardRef(
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
          d="M8 0v9H7V0h1zm4.387 1.792l.358.35A7.468 7.468 0 0115 7.494C15 11.635 11.644 15 7.5 15 3.358 15 0 11.635 0 7.495 0 5.391.877 3.5 2.269 2.141l.357-.35.7.716-.359.35A6.463 6.463 0 001 7.494 6.506 6.506 0 007.5 14c3.59 0 6.5-2.917 6.5-6.505 0-1.818-.748-3.459-1.955-4.639l-.357-.35.7-.714z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPower.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPower.displayName = "Power";

export default SvgPower;
