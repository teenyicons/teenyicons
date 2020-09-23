import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretLeftSmall = forwardRef(
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
          d="M7.207 5.5l-2 2 2 2-.707.707L3.793 7.5 6.5 4.793l.707.707zm3 0l-2 2 2 2-.707.707L6.793 7.5 9.5 4.793l.707.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretLeftSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretLeftSmall.displayName = "DoubleCaretLeftSmall";

export default SvgDoubleCaretLeftSmall;
