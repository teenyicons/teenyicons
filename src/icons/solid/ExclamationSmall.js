import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExclamationSmall = forwardRef(
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
          d="M7 8V4h1v4H7zm1 2v1.01H7V10h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExclamationSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExclamationSmall.displayName = "ExclamationSmall";

export default SvgExclamationSmall;
