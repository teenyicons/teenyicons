import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBug = forwardRef(
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
          d="M4 3.941V3.5a3.5 3.5 0 117 0v.441l2.776-1.388.448.894-2.953 1.477.043.086A6.5 6.5 0 0112 7.916V8h3v1h-3v1.5c0 .625-.127 1.22-.358 1.762l2.582 1.29-.448.895-2.627-1.313A4.494 4.494 0 017.5 15a4.494 4.494 0 01-3.65-1.866l-2.626 1.313-.448-.894 2.582-1.291A4.486 4.486 0 013 10.5V9H0V8h3v-.084a6.5 6.5 0 01.686-2.906l.043-.086L.776 3.447l.448-.894L4 3.94zM5 3.5a2.5 2.5 0 015 0V4H5v-.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBug.displayName = "Bug";

export default SvgBug;
