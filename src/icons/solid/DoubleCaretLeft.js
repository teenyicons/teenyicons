import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretLeft = forwardRef(
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
          d="M8.707 1.026L1.735 7.5l6.972 6.474-.68.733L.264 7.5 8.026.293l.68.733zm5.5 0L7.235 7.5l6.972 6.474-.68.733L5.764 7.5 13.526.293l.68.733z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretLeft.displayName = "DoubleCaretLeft";

export default SvgDoubleCaretLeft;
