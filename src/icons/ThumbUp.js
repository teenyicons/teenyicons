import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgThumbUp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 5.5l-.422-.268L3 5.354V5.5h.5zm2.698-4.24l.421.27-.421-.27zm2.667 1.51l-.448-.223.448.224zM7.5 5.5l-.447-.224A.5.5 0 007.5 6v-.5zm7 5l.4.3.1-.133V10.5h-.5zm-2.4 3.2l.4.3-.4-.3zM8.282.769L8.539.34 8.282.77zM0 5v10h1V5H0zm3.922.768L6.619 1.53 5.776.992l-2.698 4.24.844.536zm4.495-3.22L7.053 5.275l.894.448 1.365-2.73-.895-.447zM7.5 6h5V5h-5v1zM14 7.5v3h1v-3h-1zm.1 2.7l-2.4 3.2.8.6 2.4-3.2-.8-.6zM10.5 14h-5v1h5v-1zM4 12.5v-7H3v7h1zM12.5 6A1.5 1.5 0 0114 7.5h1A2.5 2.5 0 0012.5 5v1zm-7 8A1.5 1.5 0 014 12.5H3A2.5 2.5 0 005.5 15v-1zM8.024 1.198c.464.278.635.866.393 1.35l.895.446A2.034 2.034 0 008.539.34l-.515.858zM11.7 13.4a1.5 1.5 0 01-1.2.6v1a2.5 2.5 0 002-1l-.8-.6zM6.62 1.53c.3-.474.924-.62 1.404-.332L8.54.34a2.034 2.034 0 00-2.763.652l.843.537z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgThumbUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgThumbUp.displayName = "ThumbUp";

export default SvgThumbUp;
