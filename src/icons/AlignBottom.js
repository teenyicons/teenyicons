import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignBottom = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M15 14.5H0m11.5-3h-3v-7h3v7zm-5 0h-3V.5h3v11z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignBottom.displayName = "AlignBottom";

export default SvgAlignBottom;
