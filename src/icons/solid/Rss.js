import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRss = forwardRef(
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
          d="M14 15C14 7.268 7.732 1 0 1V0c8.284 0 15 6.716 15 15h-1z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
        <path d="M9 15a9 9 0 00-9-9v1a8 8 0 018 8h1z" fill={color} />
      </svg>
    );
  }
);

SvgRss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRss.displayName = "Rss";

export default SvgRss;
