import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRightCircle = forwardRef(
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
          d="M15 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zM6 3.293L10.207 7.5 6 11.707V3.293z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRightCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRightCircle.displayName = "RightCircle";

export default SvgRightCircle;
