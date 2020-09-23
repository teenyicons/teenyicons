import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGridLayout = forwardRef(
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
          d="M1.5 0A1.5 1.5 0 000 1.5v4A1.5 1.5 0 001.5 7h4A1.5 1.5 0 007 5.5v-4A1.5 1.5 0 005.5 0h-4zM9.5 0A1.5 1.5 0 008 1.5v4A1.5 1.5 0 009.5 7h4A1.5 1.5 0 0015 5.5v-4A1.5 1.5 0 0013.5 0h-4zM1.5 8A1.5 1.5 0 000 9.5v4A1.5 1.5 0 001.5 15h4A1.5 1.5 0 007 13.5v-4A1.5 1.5 0 005.5 8h-4zM9.5 8A1.5 1.5 0 008 9.5v4A1.5 1.5 0 009.5 15h4a1.5 1.5 0 001.5-1.5v-4A1.5 1.5 0 0013.5 8h-4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGridLayout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGridLayout.displayName = "GridLayout";

export default SvgGridLayout;
