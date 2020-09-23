import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAddSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 4v7M4 7.5h7" stroke={color} />
      </svg>
    );
  }
);

SvgAddSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAddSmall.displayName = "AddSmall";

export default SvgAddSmall;
