import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretUpSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 6.5l2-2 2 2m-4 3l2-2 2 2"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretUpSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretUpSmall.displayName = "DoubleCaretUpSmall";

export default SvgDoubleCaretUpSmall;
