import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPassword = forwardRef(
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
          d="M11 11h-1v-1h1v1zM8 11h1v-1H8v1zM13 11h-1v-1h1v1z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6V3.5a3.5 3.5 0 117 0V6h1.5A1.5 1.5 0 0113 7.5v.55a2.5 2.5 0 010 4.9v.55a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 010 13.5v-6A1.5 1.5 0 011.5 6H3zm1-2.5a2.5 2.5 0 015 0V6H4V3.5zM8.5 9a1.5 1.5 0 100 3h4a1.5 1.5 0 000-3h-4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPassword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPassword.displayName = "Password";

export default SvgPassword;
