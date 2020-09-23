import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUserSquare = forwardRef(
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
          d="M1.5 0A1.5 1.5 0 000 1.5v12A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0013.5 0h-12zm5 9A3.5 3.5 0 003 12.5v1a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1A3.5 3.5 0 008.5 9h-2zM5 5.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUserSquare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUserSquare.displayName = "UserSquare";

export default SvgUserSquare;
