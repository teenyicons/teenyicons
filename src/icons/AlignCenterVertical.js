import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignCenterVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M15 7.5h-3.5m-8 0H0m8.5 0h-2m5 3.5h-3V4h3v7zm-5 2.5h-3v-12h3v12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAlignCenterVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignCenterVertical.displayName = "AlignCenterVertical";

export default SvgAlignCenterVertical;
