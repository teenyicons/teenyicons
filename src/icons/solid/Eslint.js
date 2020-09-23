import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEslint = forwardRef(
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
          d="M5 8.732V6.268L7.5 4.6 10 6.268v2.464L7.5 10.4 5 8.732z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.053 1.276A.5.5 0 013.5 1h8a.5.5 0 01.447.276l3 6a.5.5 0 010 .448l-3 6A.5.5 0 0111.5 14h-8a.5.5 0 01-.447-.276l-3-6a.5.5 0 010-.448l3-6zM11 5.732L7.5 3.4 4 5.732v3.536L7.5 11.6 11 9.268V5.732z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEslint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEslint.displayName = "Eslint";

export default SvgEslint;
