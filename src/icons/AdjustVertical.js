import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 12.5V15m5-15v2.5M2.5 0v6.5m0 2V15m5-4.5V0m5 4.5V15m-2-10.5h4v-2h-4v2zm-5 8h4v-2h-4v2zm-5-4h4v-2h-4v2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAdjustVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdjustVertical.displayName = "AdjustVertical";

export default SvgAdjustVertical;
