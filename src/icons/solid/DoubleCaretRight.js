import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretRight = forwardRef(
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
          d="M1.474.293L9.234 7.5l-7.76 7.207-.68-.733L7.764 7.5.793 1.026l.68-.733zm5.5 0l7.76 7.207-7.76 7.207-.68-.733L13.264 7.5 6.293 1.026l.68-.733z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretRight.displayName = "DoubleCaretRight";

export default SvgDoubleCaretRight;
