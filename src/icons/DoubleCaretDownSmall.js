import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretDownSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 8.5l-2 2-2-2m4-3l-2 2-2-2"
          stroke={color}
          strokeLinecap="square"
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
