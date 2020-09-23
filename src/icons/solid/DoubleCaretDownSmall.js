import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretDownSmall = forwardRef(
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
          d="M5.5 4.793l2 2 2-2 .707.707L7.5 8.207 4.793 5.5l.707-.707zm0 3l2 2 2-2 .707.707L7.5 11.207 4.793 8.5l.707-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretDownSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretDownSmall.displayName = "DoubleCaretDownSmall";

export default SvgDoubleCaretDownSmall;
