import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBottomRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 13.5v.5a.5.5 0 00.5-.5h-.5zm0-.5H8v1h5.5v-1zm.5.5V8h-1v5.5h1zm-.146-.354l-12-12-.708.708 12 12 .707-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBottomRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBottomRight.displayName = "BottomRight";

export default SvgBottomRight;
