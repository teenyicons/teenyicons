import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogleAd = forwardRef(
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
          d="M5 6a1 1 0 00-1 1v1h2V7a1 1 0 00-1-1zM11 8H9.5a.5.5 0 000 1H11V8z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 4.5A2.5 2.5 0 012.5 2h10A2.5 2.5 0 0115 4.5v6a2.5 2.5 0 01-2.5 2.5h-10A2.5 2.5 0 010 10.5v-6zM4 10V9h2v1h1V7a2 2 0 10-4 0v3h1zm7-3H9.5a1.5 1.5 0 100 3H12V5h-1v2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGoogleAd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogleAd.displayName = "GoogleAd";

export default SvgGoogleAd;
