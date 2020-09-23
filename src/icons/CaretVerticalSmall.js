import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCaretVerticalSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10 9l-2.5 2L5 9m0-3l2.5-2L10 6"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgCaretVerticalSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCaretVerticalSmall.displayName = "CaretVerticalSmall";

export default SvgCaretVerticalSmall;
