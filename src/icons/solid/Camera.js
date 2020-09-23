import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCamera = forwardRef(
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
          d="M2 1h5v1H2V1zM8 8.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12.5A1.5 1.5 0 001.5 14h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 3h-12A1.5 1.5 0 000 4.5v8zM9.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCamera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCamera.displayName = "Camera";

export default SvgCamera;
