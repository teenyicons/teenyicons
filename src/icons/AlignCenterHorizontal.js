import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignCenterHorizontal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 0v3.5m0 8V15m0-8.5v2M4 3.5v3h7v-3H4zm-2.5 5v3h12v-3h-12z"
          stroke={color}
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
