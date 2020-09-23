import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBank = forwardRef(
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
          d="M7.724.053a.5.5 0 00-.448 0l-6 3 .448.894L7.5 1.06l5.776 2.888.448-.894-6-3z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 6h1V5H0v1h1v8H0v1h15v-1h-1V6zm-9 6V8h1v4H5zm4 0V8h1v4H9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBank.displayName = "Bank";

export default SvgBank;
