import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderOuter = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 4.5h1m2 3h1m-4 0h1m-1 3h1m-4-3h1m-3.5-6h12v12h-12v-12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBorderOuter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderOuter.displayName = "BorderOuter";

export default SvgBorderOuter;
