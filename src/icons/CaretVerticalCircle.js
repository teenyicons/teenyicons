import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCaretVerticalCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.312 9.39l.39-.312-.624-.78-.39.312.624.78zM7.5 11l-.312.39.312.25.312-.25L7.5 11zM5.312 8.61l-.39-.313-.625.781.39.312.625-.78zm-.624-3l-.39.312.624.78.39-.312-.624-.78zM7.5 4l.312-.39-.312-.25-.312.25L7.5 4zm2.188 2.39l.39.313.625-.781-.39-.312-.625.78zm0 2.22l-2.5 2 .624.78 2.5-2-.624-.78zm-1.876 2l-2.5-2-.624.78 2.5 2 .624-.78zm-2.5-4.22l2.5-2-.624-.78-2.5 2 .624.78zm1.876-2l2.5 2 .624-.78-2.5-2-.624.78zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
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
