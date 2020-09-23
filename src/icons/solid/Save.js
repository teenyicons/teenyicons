import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSave = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h8.586a1.5 1.5 0 011.06.44l3.415 3.414A1.5 1.5 0 0115 4.914V13.5a1.5 1.5 0 01-1.5 1.5H11v-3.5A1.5 1.5 0 009.5 10h-4A1.5 1.5 0 004 11.5V15H1.5A1.5 1.5 0 010 13.5v-12z"
          fill={color}
        />
        <path
          d="M5 15h5v-3.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V15z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSave.displayName = "Save";

export default SvgSave;
