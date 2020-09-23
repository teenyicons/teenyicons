import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowLeftSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.146 9.854l.354.353.707-.707-.353-.354-.708.708zM4.5 7.5l-.354-.354-.353.354.353.354L4.5 7.5zm2.354-1.646l.353-.354-.707-.707-.354.353.708.708zm0 3.292l-2-2-.708.708 2 2 .708-.708zm-2-1.292l2-2-.708-.708-2 2 .708.708zM4.5 8H11V7H4.5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowLeftSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowLeftSmall.displayName = "ArrowLeftSmall";

export default SvgArrowLeftSmall;
