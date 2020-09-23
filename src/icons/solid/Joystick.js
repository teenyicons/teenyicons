import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgJoystick = forwardRef(
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
          d="M4 3.5a3.5 3.5 0 114 3.465V10h5.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5H7V6.965A3.5 3.5 0 014 3.5z"
          fill={color}
        />
        <path d="M3 8v1h2V8H3z" fill={color} />
      </svg>
    );
  }
);

SvgJoystick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgJoystick.displayName = "Joystick";

export default SvgJoystick;
