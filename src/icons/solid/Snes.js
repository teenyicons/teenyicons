import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSnes = forwardRef(
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
          d="M0 4.5A1.5 1.5 0 011.5 3h12A1.5 1.5 0 0115 4.5v6a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 10.5v-6zM12 7h-1V6h1v1zm-9 3V9H2V8h1V7h1v1h1v1H4v1H3zm8-1h1V8h-1v1zM9 9h1V8H9v1zm1-2H9V6h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSnes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSnes.displayName = "Snes";

export default SvgSnes;
