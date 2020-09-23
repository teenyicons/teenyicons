import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInfoCircle = forwardRef(
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
          d="M15 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM7 5V3.99h1V5H7zm1 2v3h1v1H6v-1h1V8H6V7h2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInfoCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInfoCircle.displayName = "InfoCircle";

export default SvgInfoCircle;
