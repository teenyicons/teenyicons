import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUpCircle = forwardRef(
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
          d="M7.5 0a7.5 7.5 0 110 15 7.5 7.5 0 010-15zM3.293 9L7.5 4.793 11.707 9H3.293z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUpCircle.displayName = "UpCircle";

export default SvgUpCircle;
