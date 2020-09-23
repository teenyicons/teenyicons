import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowLeftCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.854 5.854l.353-.354-.707-.707-.354.353.708.708zM4.5 7.5l-.354-.354-.353.354.353.354L4.5 7.5zm1.646 2.354l.354.353.707-.707-.353-.354-.708.708zM7.5.5V0v.5zm7 7h.5-.5zm-14 0H1 .5zm7 7V14v.5zM6.146 5.146l-2 2 .708.708 2-2-.708-.708zm-2 2.708l2 2 .708-.708-2-2-.708.708zM4.5 8H11V7H4.5v1zm3-7A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zm0 1A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowLeftCircle.displayName = "ArrowLeftCircle";

export default SvgArrowLeftCircle;
