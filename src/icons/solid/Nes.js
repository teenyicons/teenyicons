import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNes = forwardRef(
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
          d="M0 4.5A1.5 1.5 0 011.5 3h12A1.5 1.5 0 0115 4.5v6a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 10.5v-6zM3 10V9H2V8h1V7h1v1h1v1H4v1H3zm8 0h1V9h-1v1zm-1 0H9V9h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNes.displayName = "Nes";

export default SvgNes;
