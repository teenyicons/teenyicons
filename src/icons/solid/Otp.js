import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgOtp = forwardRef(
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
          d="M3.5 6a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zM11 7h.5a.5.5 0 000-1H11v1z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zm2 5a1.5 1.5 0 113 0v2a1.5 1.5 0 11-3 0v-2zM7 6H6V5h3v1H8v4H7V6zm3-1h1.5a1.5 1.5 0 010 3H11v2h-1V5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgOtp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgOtp.displayName = "Otp";

export default SvgOtp;
