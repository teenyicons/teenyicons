import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlarm = forwardRef(
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
          d="M3.854.854l-3 3-.708-.708 3-3 .708.708zM14.146 3.854l-3-3 .708-.708 3 3-.707.708z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 8.5a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 8V5H7v4h3V8H8z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlarm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlarm.displayName = "Alarm";

export default SvgAlarm;
