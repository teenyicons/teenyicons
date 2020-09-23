import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMouse = forwardRef(
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
          d="M2 5.5a5.5 5.5 0 1111 0v4a5.5 5.5 0 11-11 0v-4zM7 4v3h1V4H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMouse.displayName = "Mouse";

export default SvgMouse;
