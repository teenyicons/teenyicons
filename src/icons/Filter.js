import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFilter = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M0 2.5h15m-12 5h9m-7 5h5" stroke={color} />
      </svg>
    );
  }
);

SvgFilter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFilter.displayName = "Filter";

export default SvgFilter;
