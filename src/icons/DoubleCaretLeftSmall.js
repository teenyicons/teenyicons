import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretLeftSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 9.5l-2-2 2-2m3 4l-2-2 2-2"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretLeftSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretLeftSmall.displayName = "DoubleCaretLeftSmall";

export default SvgDoubleCaretLeftSmall;
