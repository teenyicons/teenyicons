import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoodFrown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.29 10.187l-.424.266.531.847.424-.265-.53-.848zm4.897-.244l.5.035.069-.998-.5-.034-.069.997zm-4.366 1.092a7.278 7.278 0 014.367-1.092l.069-.997a8.278 8.278 0 00-4.967 1.241l.53.848zM4 6h1V5H4v1zm6 0h1V5h-1v1zm-2.5 8A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMoodFrown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoodFrown.displayName = "MoodFrown";

export default SvgMoodFrown;
