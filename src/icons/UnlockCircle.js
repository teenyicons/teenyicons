import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnlockCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.121 4.121l.354-.353-.354.353zM5.5 7h4V6h-4v1zm4.5.5v3h1v-3h-1zM9.5 11h-4v1h4v-1zM5 10.5v-3H4v3h1zm.5.5a.5.5 0 01-.5-.5H4A1.5 1.5 0 005.5 12v-1zm4.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM9.5 7a.5.5 0 01.5.5h1A1.5 1.5 0 009.5 6v1zm-4-1A1.5 1.5 0 004 7.5h1a.5.5 0 01.5-.5V6zm.5.5v-.879H5V6.5h1zm2.768-2.025l.378.379.708-.708-.38-.378-.706.707zM7.62 4c.43 0 .843.17 1.147.475l.707-.707A2.621 2.621 0 007.62 3v1zM6 5.621C6 4.726 6.726 4 7.621 4V3A2.621 2.621 0 005 5.621h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUnlockCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnlockCircle.displayName = "UnlockCircle";

export default SvgUnlockCircle;
