import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMedium = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4.5l3 4 3-4m-6 0H3m1.5 0V11m6-6.5H12m-1.5 0V11M3 10.5h3m3 0h3M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMedium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMedium.displayName = "Medium";

export default SvgMedium;
