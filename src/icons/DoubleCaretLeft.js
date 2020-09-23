import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretLeft = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8 1L1 7.5 8 14m5.5-13l-7 6.5 7 6.5"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretLeft.displayName = "DoubleCaretLeft";

export default SvgDoubleCaretLeft;
