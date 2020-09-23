import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPinAlt = forwardRef(
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
          d="M7.5 0A4.5 4.5 0 007 8.973V15h1V8.973A4.5 4.5 0 007.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPinAlt.displayName = "PinAlt";

export default SvgPinAlt;
