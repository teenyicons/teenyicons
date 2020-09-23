import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPause = forwardRef(
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
          d="M5 12V3h1v9H5zm4 0V3h1v9H9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPause.displayName = "Pause";

export default SvgPause;
