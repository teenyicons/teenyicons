import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgJavascript = forwardRef(
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
          d="M15 0H0v15h15V0zM8 8a2 2 0 012-2h1.167C12.179 6 13 6.82 13 7.833V8h-1v-.167A.833.833 0 0011.167 7H10a1 1 0 000 2h1a2 2 0 110 4h-1a2 2 0 01-2-2h1a1 1 0 001 1h1a1 1 0 100-2h-1a2 2 0 01-2-2zM6 6v5a1 1 0 11-2 0H3a2 2 0 104 0V6H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgJavascript.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgJavascript.displayName = "Javascript";

export default SvgJavascript;
