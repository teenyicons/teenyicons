import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgZoomOut = forwardRef(
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
          d="M0 6.5a6.5 6.5 0 1111.436 4.23l3.418 3.416-.707.708-3.418-3.418A6.5 6.5 0 010 6.5zM4 7h5V6H4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgZoomOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgZoomOut.displayName = "ZoomOut";

export default SvgZoomOut;
