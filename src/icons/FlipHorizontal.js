import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFlipHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5.5l.224-.447A.5.5 0 003 .5h.5zm8 4V5a.5.5 0 00.224-.947L11.5 4.5zm-8 0H3a.5.5 0 00.5.5v-.5zm0 6V10a.5.5 0 00-.5.5h.5zm8 0l.224.447A.5.5 0 0011.5 10v.5zm-8 4H3a.5.5 0 00.724.447L3.5 14.5zM3.276.947l8 4 .448-.894-8-4-.448.894zM11.5 4h-8v1h8V4zM4 4.5v-4H3v4h1zM0 8h15V7H0v1zm3.5 3h8v-1h-8v1zm7.776-.947l-8 4 .448.894 8-4-.448-.894zM4 14.5v-4H3v4h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFlipHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFlipHorizontal.displayName = "FlipHorizontal";

export default SvgFlipHorizontal;
