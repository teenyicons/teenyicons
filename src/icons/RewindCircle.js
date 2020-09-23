import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRewindCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 5.5H7a.5.5 0 00-.748-.434L6.5 5.5zm0 4l-.248.434A.5.5 0 007 9.5h-.5zM3 7.5l-.248-.434a.5.5 0 000 .868L3 7.5zm7.5-2h.5a.5.5 0 00-.748-.434l.248.434zm0 4l-.248.434A.5.5 0 0011 9.5h-.5zM7 7.5l-.248-.434a.5.5 0 000 .868L7 7.5zm.5 7.5A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1zM0 7.5A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0zM7.5 0A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zm0 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM6 5.5v4h1v-4H6zm.748 3.566l-3.5-2-.496.868 3.5 2 .496-.868zm-3.5-1.132l3.5-2-.496-.868-3.5 2 .496.868zM10 5.5v4h1v-4h-1zm.748 3.566l-3.5-2-.496.868 3.5 2 .496-.868zm-3.5-1.132l3.5-2-.496-.868-3.5 2 .496.868z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRewindCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRewindCircle.displayName = "RewindCircle";

export default SvgRewindCircle;
