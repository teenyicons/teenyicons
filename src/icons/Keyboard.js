import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgKeyboard = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11 11.5H4m7-3h-1m-2 0H7m-2 0H4m7-2h-1m-2 0H7m-2 0H4m3.5-2V0m6 4.5h-12a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgKeyboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgKeyboard.displayName = "Keyboard";

export default SvgKeyboard;
