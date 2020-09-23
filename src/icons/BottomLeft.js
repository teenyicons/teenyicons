import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBottomLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 13.5H1a.5.5 0 00.5.5v-.5zm0 .5H7v-1H1.5v1zm.5-.5V8H1v5.5h1zm-.146.354l12-12-.708-.708-12 12 .708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBottomLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBottomLeft.displayName = "BottomLeft";

export default SvgBottomLeft;
