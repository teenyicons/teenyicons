import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlug = forwardRef(
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
          d="M10 4H5V0H4v4H2v4h1v1.5A2.5 2.5 0 005.5 12H6v3h1v-3h1v3h1v-3h.5A2.5 2.5 0 0012 9.5V8h1V4h-2V0h-1v4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPlug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlug.displayName = "Plug";

export default SvgPlug;
