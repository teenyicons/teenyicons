import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEditSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 8.5l-.354-.354L4 8.293V8.5h.5zm4-4l.354-.354a.5.5 0 00-.708 0L8.5 4.5zm2 2l.354.354a.5.5 0 000-.708L10.5 6.5zm-4 4v.5h.207l.147-.146L6.5 10.5zm-2 0H4a.5.5 0 00.5.5v-.5zm.354-1.646l4-4-.708-.708-4 4 .708.708zm3.292-4l2 2 .708-.708-2-2-.708.708zm2 1.292l-4 4 .708.708 4-4-.708-.708zM6.5 10h-2v1h2v-1zm-1.5.5v-2H4v2h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEditSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEditSmall.displayName = "EditSmall";

export default SvgEditSmall;
