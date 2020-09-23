import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdjustVertical = forwardRef(
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
          d="M2 0v6H0v3h2v6h1V9h2V6H3V0H2zM5 10h2V0h1v10h2v3H8v2H7v-2H5v-3zM12 0v2h-2v3h2v10h1V5h2V2h-2V0h-1z"
          fill={color}
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
