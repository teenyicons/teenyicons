import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlignTextJustify = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M0 3.5h15m-15 8h15m-15-4h15" stroke={color} />
      </svg>
    );
  }
);

SvgAlignTextJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlignTextJustify.displayName = "AlignTextJustify";

export default SvgAlignTextJustify;
