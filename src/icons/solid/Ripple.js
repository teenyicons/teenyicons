import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRipple = forwardRef(
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
          d="M4.193 5.155l-3.06-3.316.734-.678 3.061 3.316a3.5 3.5 0 005.144 0l3.06-3.316.735.678-3.06 3.316a4.5 4.5 0 01-6.614 0zm5.879 5.368a3.5 3.5 0 00-5.144 0l-3.06 3.316-.735-.678 3.06-3.316a4.5 4.5 0 016.614 0l3.06 3.316-.734.678-3.061-3.316z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRipple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRipple.displayName = "Ripple";

export default SvgRipple;
