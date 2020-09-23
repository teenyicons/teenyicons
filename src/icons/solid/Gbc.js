import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGbc = forwardRef(
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
        <path d="M5 6V3h5v2.5a.5.5 0 01-.5.5H5z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 1.5A1.5 1.5 0 013.5 0h8A1.5 1.5 0 0113 1.5v10A3.5 3.5 0 019.5 15h-6A1.5 1.5 0 012 13.5v-12zm2.5.5a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h5A1.5 1.5 0 0011 5.5v-3a.5.5 0 00-.5-.5h-6zM5 8v1H4v1h1v1h1v-1h1V9H6V8H5zm5 0v1h1V8h-1zm-1 3v-1h1v1H9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGbc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGbc.displayName = "Gbc";

export default SvgGbc;
