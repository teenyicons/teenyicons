import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgIndentDecrease = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 7.5l-.354-.354a.5.5 0 000 .708L.5 7.5zM3 4h12V3H3v1zm4 4h8V7H7v1zm-4 4h12v-1H3v1zm-.146-2.854l-2-2-.708.708 2 2 .708-.708zm-2-1.292l2-2-.708-.708-2 2 .708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgIndentDecrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgIndentDecrease.displayName = "IndentDecrease";

export default SvgIndentDecrease;
