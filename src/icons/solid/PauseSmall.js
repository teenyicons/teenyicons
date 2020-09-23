import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPauseSmall = forwardRef(
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
          d="M6 10V5h1v5H6zm2 0V5h1v5H8z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPauseSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPauseSmall.displayName = "PauseSmall";

export default SvgPauseSmall;
