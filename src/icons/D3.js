import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgD3 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 1.5h1.5a6 6 0 110 12H0m7-12h4.5a3 3 0 110 6m0 0H9m2.5 0h-2m2 0a3 3 0 110 6H7"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgD3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgD3.displayName = "D3";

export default SvgD3;
