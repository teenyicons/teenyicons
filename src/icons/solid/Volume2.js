import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVolume2 = forwardRef(
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
          d="M9 1.5a.5.5 0 00-.757-.429L3.362 3.998H1.5a1.5 1.5 0 00-1.5 1.5v3.997c0 .83.672 1.5 1.5 1.5h1.862l4.88 2.926A.5.5 0 009 13.492V1.5zM12 4v7h1V4h-1zM10 6v3h1V6h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVolume2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVolume2.displayName = "Volume2";

export default SvgVolume2;
