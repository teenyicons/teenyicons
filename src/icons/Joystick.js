import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgJoystick = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 10.5V10a.5.5 0 00-.5.5h.5zm12 0h.5a.5.5 0 00-.5-.5v.5zm0 4v.5a.5.5 0 00.5-.5h-.5zm-12 0H1a.5.5 0 00.5.5v-.5zm0-3.5h12v-1h-12v1zm11.5-.5v4h1v-4h-1zm.5 3.5h-12v1h12v-1zM2 14.5v-4H1v4h1zm6-4v-4H7v4h1zM7.5 0A3.5 3.5 0 004 3.5h1A2.5 2.5 0 017.5 1V0zM11 3.5A3.5 3.5 0 007.5 0v1A2.5 2.5 0 0110 3.5h1zM7.5 7A3.5 3.5 0 0011 3.5h-1A2.5 2.5 0 017.5 6v1zm0-1A2.5 2.5 0 015 3.5H4A3.5 3.5 0 007.5 7V6zM3 9h2V8H3v1z"
          fill={color}
        />
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
