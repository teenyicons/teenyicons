import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBulbOff = forwardRef(
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
          d="M7.5 3a3.959 3.959 0 00-3.92 3.4l-.01.07a3.951 3.951 0 00.79 2.989c.383.495.64.968.64 1.442V12.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-1.599c0-.474.256-.947.64-1.442.63-.814.948-1.875.79-2.99l-.01-.07A3.959 3.959 0 007.5 3zM6 15h3v-1H6v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBulbOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBulbOff.displayName = "BulbOff";

export default SvgBulbOff;
