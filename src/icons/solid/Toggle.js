import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgToggle = forwardRef(
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
          d="M0 3.5A3.5 3.5 0 013.5 0h8a3.5 3.5 0 110 7h-8A3.5 3.5 0 010 3.5zM3.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM15 11.5a3.5 3.5 0 01-3.5 3.5h-8a3.5 3.5 0 110-7h8a3.5 3.5 0 013.5 3.5zM11.5 13a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgToggle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgToggle.displayName = "Toggle";

export default SvgToggle;
