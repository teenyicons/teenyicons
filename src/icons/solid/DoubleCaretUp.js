import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretUp = forwardRef(
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
          d="M7.5.265l7.207 7.761-.733.68L7.5 1.736 1.026 8.707l-.733-.68L7.5.264zm0 5.5l7.207 7.761-.733.68L7.5 7.236l-6.474 6.972-.733-.68L7.5 5.764z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretUp.displayName = "DoubleCaretUp";

export default SvgDoubleCaretUp;
