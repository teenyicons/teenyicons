import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretLeftCircle = forwardRef(
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
          d="M15 7.5a7.5 7.5 0 10-15 0 7.5 7.5 0 0015 0zM9.5 4.793L6.793 7.5 9.5 10.207l.707-.707-2-2 2-2-.707-.707zm-3 0L3.793 7.5 6.5 10.207l.707-.707-2-2 2-2-.707-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretLeftCircle.displayName = "DoubleCaretLeftCircle";

export default SvgDoubleCaretLeftCircle;
