import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHomeAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l.354-.354a.5.5 0 00-.708 0L7.5.5zm-6 6l-.354-.354L1 6.293V6.5h.5zm12 0h.5v-.207l-.146-.147-.354.354zm.354-.354l-6-6-.708.708 6 6 .708-.708zm-6.708-6l-6 6 .708.708 6-6-.708-.708zM14 13.5v-7h-1v7h1zm-13-7v7h1v-7H1zM2.5 15h10v-1h-10v1zM13 13.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zm-12 0A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHomeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHomeAlt.displayName = "HomeAlt";

export default SvgHomeAlt;
