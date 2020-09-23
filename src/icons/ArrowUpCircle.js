import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowUpCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.146 6.854l.354.353.707-.707-.353-.354-.708.708zM7.5 4.5l.354-.354-.354-.353-.354.353.354.354zM5.146 6.146l-.353.354.707.707.354-.353-.708-.708zM14.5 7.5H14h.5zm-7 7V14v.5zm0-14V0v.5zm-7 7H0h.5zm9.354-1.354l-2-2-.708.708 2 2 .708-.708zm-2.708-2l-2 2 .708.708 2-2-.708-.708zM7 4.5V11h1V4.5H7zm7 3A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zm-1 0A7.5 7.5 0 007.5 15v-1A6.5 6.5 0 011 7.5H0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowUpCircle.displayName = "ArrowUpCircle";

export default SvgArrowUpCircle;
