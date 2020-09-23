import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPython = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6 2.5h1M4.5 4V1.5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 00-1 1v5a1 1 0 001 1h4a1 1 0 001-1V11M8 4.5H1.5a1 1 0 00-1 1v5a1 1 0 001 1h3m2.5-1h6.5a1 1 0 001-1v-5a1 1 0 00-1-1h-3m-2.5 9h1"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPython.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPython.displayName = "Python";

export default SvgPython;
