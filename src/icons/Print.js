import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPrint = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 12.5h-2a1 1 0 01-1-1v-4a1 1 0 011-1h12a1 1 0 011 1v4a1 1 0 01-1 1h-2m-8-6v-5a1 1 0 011-1h6a1 1 0 011 1v5m-8 4h8v4h-8v-4z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPrint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPrint.displayName = "Print";

export default SvgPrint;
