import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgViewColumn = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M9.5 0v15m4-15v15m-8-15v15m-4-15v15" stroke={color} />
      </svg>
    );
  }
);

SvgViewColumn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgViewColumn.displayName = "ViewColumn";

export default SvgViewColumn;
