import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCplusplus = forwardRef(
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
          d="M7.5.421L14 4.213v6.574L7.5 14.58 1 10.787V4.213L7.5.42zM6.5 4a3.5 3.5 0 100 7h.586a3.914 3.914 0 002.768-1.146l-.708-.708a2.914 2.914 0 01-2.06.854H6.5a2.5 2.5 0 010-5h.586c.773 0 1.514.307 2.06.854l.708-.708A3.914 3.914 0 007.086 4H6.5zM7 7V6h1v1h2V6h1v1h1v1h-1v1h-1V8H8v1H7V8H6V7h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCplusplus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCplusplus.displayName = "Cplusplus";

export default SvgCplusplus;
