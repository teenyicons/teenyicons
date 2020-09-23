import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChatTypingAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 7.5h1m-4 0h1m5 0h1m3.5 7h-7a7 7 0 117-7v7z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgChatTypingAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChatTypingAlt.displayName = "ChatTypingAlt";

export default SvgChatTypingAlt;
