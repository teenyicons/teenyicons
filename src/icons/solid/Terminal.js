import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTerminal = forwardRef(
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
          d="M0 2.5A1.5 1.5 0 011.5 1h12A1.5 1.5 0 0115 2.5v10a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-10zm5.793 5L3.146 4.854l.708-.708L7.207 7.5l-3.353 3.354-.708-.707L5.793 7.5zM12 11H8v-1h4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTerminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTerminal.displayName = "Terminal";

export default SvgTerminal;
