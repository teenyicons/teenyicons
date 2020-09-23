import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGlobe = forwardRef(
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
          d="M14 5.5A6.486 6.486 0 0011.8.625l-.662.75A5.5 5.5 0 113.834 9.6l-.667.745A6.476 6.476 0 007 11.98V14H4v1h7v-1H8v-2.019A6.5 6.5 0 0014 5.5z"
          fill={color}
        />
        <path d="M7.5 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill={color} />
      </svg>
    );
  }
);

SvgGlobe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGlobe.displayName = "Globe";

export default SvgGlobe;
