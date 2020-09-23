import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRobot = forwardRef(
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
          d="M5 8.5a.5.5 0 111 0 .5.5 0 01-1 0zM9 8.5a.5.5 0 111 0 .5.5 0 01-1 0z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2.022A5.5 5.5 0 0113 7.5v6a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 13.5v-6a5.5 5.5 0 015-5.478V0h1v2.022zM5.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1.5 5H4v-1h7v1z"
          fill={color}
        />
        <path d="M0 8v4h1V8H0zM15 8h-1v4h1V8z" fill={color} />
      </svg>
    );
  }
);

SvgRobot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRobot.displayName = "Robot";

export default SvgRobot;
