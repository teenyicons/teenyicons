import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowDown = forwardRef(
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
          d="M8 1v11.293l3.146-3.147.708.708L7.5 14.207 3.146 9.854l.708-.708L7 12.293V1h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowDown.displayName = "ArrowDown";

export default SvgArrowDown;
