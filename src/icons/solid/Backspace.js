import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBackspace = forwardRef(
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
          d="M4.11 2.188A.5.5 0 014.5 2h9A1.5 1.5 0 0115 3.5v8a1.5 1.5 0 01-1.5 1.5h-9a.5.5 0 01-.39-.188l-4-5a.5.5 0 010-.624l4-5zm6.036 7.666L8.5 8.207 6.854 9.854l-.708-.708L7.793 7.5 6.146 5.854l.708-.708L8.5 6.793l1.646-1.647.708.708L9.207 7.5l1.647 1.646-.707.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBackspace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBackspace.displayName = "Backspace";

export default SvgBackspace;
