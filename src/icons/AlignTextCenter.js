import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextCenter = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M15 3.5H0m10 4H5m7 4H3" stroke={color} />
      </svg>
    );
  }
);

SvgAlignTextCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextCenter.displayName = "AlignTextCenter";

export default SvgAlignTextCenter;
