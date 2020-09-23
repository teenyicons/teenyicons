import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExclamation = forwardRef(
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
          d="M7 11V1h1v10H7zm1 2v1.01H7V13h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExclamation.displayName = "Exclamation";

export default SvgExclamation;
