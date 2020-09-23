import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretDown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1 7l6.5 7L14 7M1 1.5l6.5 7 6.5-7"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretDown.displayName = "DoubleCaretDown";

export default SvgDoubleCaretDown;
