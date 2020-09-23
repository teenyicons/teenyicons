import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDividerLine = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M0 7.5h15m-12-3h7m-7-3h9m-9 9h9m-9 3h7" stroke={color} />
      </svg>
    );
  }
);

SvgDividerLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDividerLine.displayName = "DividerLine";

export default SvgDividerLine;
