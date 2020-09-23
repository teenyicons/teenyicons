import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgYen = forwardRef(
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
          d="M6.528 7H3v1h4v3H3v1h4v3h1v-3h4v-1H8V8h4V7H8.472L12.907.79l-.814-.58L7.5 6.64 2.907.21l-.814.58L6.528 7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgYen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgYen.displayName = "Yen";

export default SvgYen;
