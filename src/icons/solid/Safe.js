import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSafe = forwardRef(
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
        <path d="M8 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 0A1.5 1.5 0 000 1.5v11A1.5 1.5 0 001.5 14H2v1h1v-1h9v1h1v-1h.5a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0013.5 0h-12zM2 3v3h1V3H2zm7.5 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM2 11V8h1v3H2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSafe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSafe.displayName = "Safe";

export default SvgSafe;
