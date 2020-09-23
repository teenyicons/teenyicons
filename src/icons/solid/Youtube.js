import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgYoutube = forwardRef(
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
        <path d="M8.599 7.5L7 8.566V6.434L8.599 7.5z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.506 1.773a28.606 28.606 0 0111.988 0A1.905 1.905 0 0115 3.636v7.728c0 .898-.628 1.675-1.506 1.863a28.605 28.605 0 01-11.988 0A1.905 1.905 0 010 11.364V3.636c0-.898.628-1.675 1.506-1.863zm5.271 3.311A.5.5 0 006 5.5v4a.5.5 0 00.777.416l3-2a.5.5 0 000-.832l-3-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgYoutube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgYoutube.displayName = "Youtube";

export default SvgYoutube;
