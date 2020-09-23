import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderAll = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 1.5v12m-6-6h12m-12-6h12v12h-12v-12z" stroke={color} />
      </svg>
    );
  }
);

SvgBorderAll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderAll.displayName = "BorderAll";

export default SvgBorderAll;
