import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowRightSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.146 9.146l-.353.354.707.707.354-.353-.708-.708zM10.5 7.5l.354.354.353-.354-.353-.354-.354.354zM8.854 5.146L8.5 4.793l-.707.707.353.354.708-.708zm0 4.708l2-2-.708-.708-2 2 .708.708zm2-2.708l-2-2-.708.708 2 2 .708-.708zM10.5 7H4v1h6.5V7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowRightSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowRightSmall.displayName = "ArrowRightSmall";

export default SvgArrowRightSmall;
