import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretDownCircle = forwardRef(
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
          d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM4.793 5.5L7.5 8.207 10.207 5.5 9.5 4.793l-2 2-2-2-.707.707zm0 3L7.5 11.207 10.207 8.5 9.5 7.793l-2 2-2-2-.707.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretDownCircle.displayName = "DoubleCaretDownCircle";

export default SvgDoubleCaretDownCircle;
