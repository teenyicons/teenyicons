import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeartCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm4.146-2.354a1.914 1.914 0 012.707 0l.647.647.646-.647a1.914 1.914 0 012.707 2.708L7.5 11.207 4.146 7.854a1.914 1.914 0 010-2.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHeartCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeartCircle.displayName = "HeartCircle";

export default SvgHeartCircle;
