import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnderline = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M2 13.5h11M3.5 1v6.5a4 4 0 108 0V1" stroke={color} />
      </svg>
    );
  }
);

SvgUnderline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnderline.displayName = "Underline";

export default SvgUnderline;
