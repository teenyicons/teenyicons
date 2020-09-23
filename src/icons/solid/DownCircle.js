import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDownCircle = forwardRef(
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
          d="M7.5 15a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm4.207-9L7.5 10.207 3.293 6h8.414z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDownCircle.displayName = "DownCircle";

export default SvgDownCircle;
