import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExclamationCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 8V4h1v4H7zm1 2v1.01H7V10h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExclamationCircle.displayName = "ExclamationCircle";

export default SvgExclamationCircle;
