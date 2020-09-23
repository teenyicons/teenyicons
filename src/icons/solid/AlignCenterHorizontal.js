import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignCenterHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M7 0v3H3.5v4H7v1H1v4h6v3h1v-3h6V8H8V7h3.5V3H8V0H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAlignCenterHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignCenterHorizontal.displayName = "AlignCenterHorizontal";

export default SvgAlignCenterHorizontal;
