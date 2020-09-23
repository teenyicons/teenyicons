import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDragVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 3a.5.5 0 110-1 .5.5 0 010 1zM9.5 8a.5.5 0 110-1 .5.5 0 010 1zM9.5 13a.5.5 0 110-1 .5.5 0 010 1zM5.5 3a.5.5 0 110-1 .5.5 0 010 1zM5.5 8a.5.5 0 110-1 .5.5 0 010 1zM5.5 13a.5.5 0 110-1 .5.5 0 010 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDragVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDragVertical.displayName = "DragVertical";

export default SvgDragVertical;
