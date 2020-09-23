import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArchive = forwardRef(
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
        <path d="M0 0h15v5H0V0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 6v7.5A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V6H1zm9 3H5V8h5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArchive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArchive.displayName = "Archive";

export default SvgArchive;
