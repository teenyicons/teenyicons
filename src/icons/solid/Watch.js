import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWatch = forwardRef(
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
          d="M4 3.085V1.5A1.5 1.5 0 015.5 0h4A1.5 1.5 0 0111 1.5v1.585A1.5 1.5 0 0112 4.5v6a1.5 1.5 0 01-1 1.415V13.5A1.5 1.5 0 019.5 15h-4A1.5 1.5 0 014 13.5v-1.585A1.5 1.5 0 013 10.5v-6a1.5 1.5 0 011-1.415zM5 1.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5V3H5V1.5zM5 12h5v1.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V12z"
          fill={color}
        />
        <path d="M13 6v3h1V6h-1z" fill={color} />
      </svg>
    );
  }
);

SvgWatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWatch.displayName = "Watch";

export default SvgWatch;
