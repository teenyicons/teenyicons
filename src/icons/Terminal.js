import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTerminal = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 4.5l3 3-3 3m4.5 0h4m-10.5-9h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgTerminal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTerminal.displayName = "Terminal";

export default SvgTerminal;
