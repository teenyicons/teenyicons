import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEuro = forwardRef(
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
          d="M2.174 5A6.503 6.503 0 0113.78 2.708l-.812.584A5.502 5.502 0 003.207 5H7v1H3.022A5.57 5.57 0 003 6.5v2c0 .169.008.335.022.5H7v1H3.207a5.502 5.502 0 009.761 1.708l.812.584A6.503 6.503 0 012.174 10H0V9h2.019A6.593 6.593 0 012 8.5v-2c0-.168.006-.335.019-.5H0V5h2.174z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEuro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEuro.displayName = "Euro";

export default SvgEuro;
