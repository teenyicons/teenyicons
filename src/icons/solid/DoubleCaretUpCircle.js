import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretUpCircle = forwardRef(
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
          d="M7.5 15a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm2.707-5.5L7.5 6.793 4.793 9.5l.707.707 2-2 2 2 .707-.707zm0-3L7.5 3.793 4.793 6.5l.707.707 2-2 2 2 .707-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretUpCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretUpCircle.displayName = "DoubleCaretUpCircle";

export default SvgDoubleCaretUpCircle;
