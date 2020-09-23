import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPageBreak = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V8H1V1.5zM1 11h13v2.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5V11zM0 8.993h3v1H0v-1zM4 8.993h3v1H4v-1zM11 8.993H8v1h3v-1zM12 8.993h3v1h-3v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPageBreak.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPageBreak.displayName = "PageBreak";

export default SvgPageBreak;
