import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgZoomIn = forwardRef(
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
          d="M0 6.5a6.5 6.5 0 1111.436 4.23l3.418 3.416-.707.708-3.418-3.418A6.5 6.5 0 010 6.5zM6 9V7H4V6h2V4h1v2h2v1H7v2H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgZoomIn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgZoomIn.displayName = "ZoomIn";

export default SvgZoomIn;
