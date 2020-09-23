import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRoller = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.05 7.914l-.138-.48.137.48zM8.224 9.293l.138.48-.138-.48zM5.5 11.5V11a.5.5 0 00-.5.5h.5zm4 0h.5a.5.5 0 00-.5-.5v.5zm0 3v.5a.5.5 0 00.5-.5h-.5zm-4 0H5a.5.5 0 00.5.5v-.5zM1.5 1h10V0h-10v1zm10.5.5v2h1v-2h-1zM11.5 4h-10v1h10V4zM1 3.5v-2H0v2h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 5V4zM12 3.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0013 3.5h-1zM11.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0011.5 0v1zm-10-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zM14 4.5v1.491h1V4.5h-1zm-1.088 2.934L8.088 8.812l.275.962 4.824-1.379-.275-.961zM7 10.254V11.5h1v-1.246H7zm1.088-1.442A1.5 1.5 0 007 10.254h1a.5.5 0 01.363-.48l-.275-.962zM14 5.992a1.5 1.5 0 01-1.088 1.442l.275.961A2.5 2.5 0 0015 5.991h-1zM12.5 3A1.5 1.5 0 0114 4.5h1A2.5 2.5 0 0012.5 2v1zm-7 9h4v-1h-4v1zm3.5-.5v3h1v-3H9zm.5 2.5h-4v1h4v-1zm-3.5.5v-3H5v3h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRoller.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRoller.displayName = "Roller";

export default SvgRoller;
