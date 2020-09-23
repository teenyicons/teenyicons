import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPauseCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7 10H6V5h1v5zm2 0H8V5h1v5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPauseCircle.displayName = "PauseCircle";

export default SvgPauseCircle;
