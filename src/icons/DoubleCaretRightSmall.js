import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretRightSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.5 9.5l2-2-2-2m-3 4l2-2-2-2"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgDoubleCaretRightSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretRightSmall.displayName = "DoubleCaretRightSmall";

export default SvgDoubleCaretRightSmall;
