import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgOpera = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 12.5a3 3 0 01-3-3v-4a3 3 0 013-3m0 10a3 3 0 003-3v-4a3 3 0 00-3-3m0 10h.585c1.907 0 3.78-.518 5.415-1.5m-6-8.5h.585c1.907 0 3.78.518 5.415 1.5m-6 10.5a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgOpera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgOpera.displayName = "Opera";

export default SvgOpera;
