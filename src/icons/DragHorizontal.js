import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDragHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 5.5a.5.5 0 11-1 0 .5.5 0 011 0zM3 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 9.5a.5.5 0 11-1 0 .5.5 0 011 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDragHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDragHorizontal.displayName = "DragHorizontal";

export default SvgDragHorizontal;
