import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDistributeVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M15 14.5H0m15-14H0m13.5 9h-12v-4h12v4z" stroke={color} />
      </svg>
    );
  }
);

SvgDistributeVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDistributeVertical.displayName = "DistributeVertical";

export default SvgDistributeVertical;
