import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTopRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 1.5h.5a.5.5 0 00-.5-.5v.5zm0-.5H8v1h5.5V1zm-.5.5V7h1V1.5h-1zm.146-.354l-12 12 .708.708 12-12-.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTopRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTopRight.displayName = "TopRight";

export default SvgTopRight;
