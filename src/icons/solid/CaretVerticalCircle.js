import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCaretVerticalCircle = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM11 6L7.5 3.375 4 6h7zM4 9l3.5 2.625L11 9H4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCaretVerticalCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCaretVerticalCircle.displayName = "CaretVerticalCircle";

export default SvgCaretVerticalCircle;
