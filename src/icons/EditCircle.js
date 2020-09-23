import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEditCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 8.5l-.354-.354L4 8.293V8.5h.5zm4-4l.354-.354a.5.5 0 00-.708 0L8.5 4.5zm2 2l.354.354a.5.5 0 000-.708L10.5 6.5zm-4 4v.5h.207l.147-.146L6.5 10.5zm-2 0H4a.5.5 0 00.5.5v-.5zm3 3.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM4.854 8.854l4-4-.708-.708-4 4 .708.708zm3.292-4l2 2 .708-.708-2-2-.708.708zm2 1.292l-4 4 .708.708 4-4-.708-.708zM6.5 10h-2v1h2v-1zm-1.5.5v-2H4v2h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEditCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEditCircle.displayName = "EditCircle";

export default SvgEditCircle;
