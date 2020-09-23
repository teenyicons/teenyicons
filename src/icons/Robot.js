import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRobot = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 2.5a5 5 0 015 5v6a1 1 0 01-1 1h-8a1 1 0 01-1-1v-6a5 5 0 015-5zm0 0V0M4 11.5h7M.5 8v4m14-4v4m-9-2.5a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z"
          stroke={color}
        />
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
