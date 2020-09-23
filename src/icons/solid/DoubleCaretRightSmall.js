import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretRightSmall = forwardRef(
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
          d="M5.5 4.793L8.207 7.5 5.5 10.207 4.793 9.5l2-2-2-2 .707-.707zm3 0L11.207 7.5 8.5 10.207 7.793 9.5l2-2-2-2 .707-.707z"
          fill={color}
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
