import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgServers = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 5.5h-12m12 0a1 1 0 001-1v-2a1 1 0 00-1-1h-12a1 1 0 00-1 1v2a1 1 0 001 1m12 0a1 1 0 011 1v2a1 1 0 01-1 1m-12-4a1 1 0 00-1 1v2a1 1 0 001 1m12 0h-12m12 0a1 1 0 011 1v2a1 1 0 01-1 1h-12a1 1 0 01-1-1v-2a1 1 0 011-1m.5-6h3m-3 4h3m-3 4h3"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgServers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgServers.displayName = "Servers";

export default SvgServers;
