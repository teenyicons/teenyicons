import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMov = forwardRef(
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
        <path d="M7 7.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-2z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM7.5 6A1.5 1.5 0 006 7.5v2a1.5 1.5 0 003 0v-2A1.5 1.5 0 007.5 6zm-4.646.146A.5.5 0 002 6.5V11h1V7.707l.5.5.5-.5V11h1V6.5a.5.5 0 00-.854-.354l-.646.647-.646-.647zM10 6h1v3.293l.5.5.5-.5V6h1v3.707l-1.146 1.147a.5.5 0 01-.708 0L10 9.707V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMov.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMov.displayName = "Mov";

export default SvgMov;
