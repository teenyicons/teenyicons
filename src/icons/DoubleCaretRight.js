import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretRight = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 14l7-6.5L7 1M1.5 14l7-6.5-7-6.5"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretRight.displayName = "DoubleCaretRight";

export default SvgDoubleCaretRight;
