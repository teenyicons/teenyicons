import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLego = forwardRef(
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
          d="M4 1.5A1.5 1.5 0 015.5 0h4A1.5 1.5 0 0111 1.5V2h.5A2.5 2.5 0 0114 4.5v8a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 011 12.5v-8A2.5 2.5 0 013.5 2H4v-.5zM5 7v1h1V7H5zm4 0v1h1V7H9zM4.9 9.7a3.25 3.25 0 005.2 0l.8.6c-1.7 2.267-5.1 2.267-6.8 0l.8-.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLego.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLego.displayName = "Lego";

export default SvgLego;
