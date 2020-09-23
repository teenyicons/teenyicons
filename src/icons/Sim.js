import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSim = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 5.5h3.5V12M4 8.5h2m-2 3h2m3-6h2m-2 3h2m-2 3h2m1.5 3h-10a1 1 0 01-1-1v-12a1 1 0 011-1h7l4 4v9a1 1 0 01-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSim.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSim.displayName = "Sim";

export default SvgSim;
