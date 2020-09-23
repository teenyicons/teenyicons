import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M15 3.5H0m15 8H6m9-4H9" stroke={color} />
      </svg>
    );
  }
);

SvgAlignTextRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextRight.displayName = "AlignTextRight";

export default SvgAlignTextRight;
