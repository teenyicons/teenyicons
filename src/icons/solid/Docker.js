import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDocker = forwardRef(
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
          d="M9 1H6v2H2v2H0v3.5A5.5 5.5 0 005.5 14h.528a7.736 7.736 0 006.774-4H15V8.5A1.5 1.5 0 0013.5 7H13v-.5A1.5 1.5 0 0011.5 5H9V1zM1 7h1V6H1v1zm2 0h1V6H3v1zm2 0h1V6H5v1zm2 0h1V6H7v1zm2 0h1V6H9v1zM8 3V2H7v1h1zM6 4H5v1h1V4zm1 1V4h1v1H7zM4 5V4H3v1h1zm-1 5h1V9H3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDocker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDocker.displayName = "Docker";

export default SvgDocker;
