import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFilePlus = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM7 10V8H5V7h2V5h1v2h2v1H8v2H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFilePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFilePlus.displayName = "FilePlus";

export default SvgFilePlus;
