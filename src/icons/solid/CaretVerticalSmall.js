import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCaretVerticalSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M7.5 3.375L11 6H4l3.5-2.625zM7.5 11.625L4 9h7l-3.5 2.625z"
          fill={color}
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
