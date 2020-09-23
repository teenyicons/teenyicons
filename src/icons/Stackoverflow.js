import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStackoverflow = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 9v5.5h10V9M4 12.5h7M4 10l7 .7M4.3 7.5L11 9M5.3 4.5l6.1 3.1M7 2l5 4.5M9.5.5l3.5 5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgStackoverflow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStackoverflow.displayName = "Stackoverflow";

export default SvgStackoverflow;
