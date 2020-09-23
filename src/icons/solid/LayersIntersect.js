import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLayersIntersect = forwardRef(
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
          d="M4 1.5V4H1.5A1.5 1.5 0 000 5.5v8A1.5 1.5 0 001.5 15h8a1.5 1.5 0 001.5-1.5V11h2.5A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-8A1.5 1.5 0 004 1.5zM5.5 1a.5.5 0 00-.5.5V4h4.5A1.5 1.5 0 0111 5.5V10h2.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-8zm0 10A1.5 1.5 0 014 9.5V5H1.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V11H5.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLayersIntersect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLayersIntersect.displayName = "LayersIntersect";

export default SvgLayersIntersect;
