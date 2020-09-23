import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNuxtjs = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 12.5l6-10 6 10H.5z"
          stroke={color}
          strokeLinejoin="round"
        />
        <path
          d="M4.5 12.5l5-8.5 5 8.5h-10z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgNuxtjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNuxtjs.displayName = "Nuxtjs";

export default SvgNuxtjs;
