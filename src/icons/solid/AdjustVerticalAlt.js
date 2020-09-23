import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustVerticalAlt = forwardRef(
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
          d="M3 0v8.05a2.5 2.5 0 000 4.9V15h1v-2.05a2.5 2.5 0 000-4.9V0H3zM11 0v2.05a2.5 2.5 0 000 4.9V15h1V6.95a2.5 2.5 0 000-4.9V0h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAdjustVerticalAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdjustVerticalAlt.displayName = "AdjustVerticalAlt";

export default SvgAdjustVerticalAlt;
