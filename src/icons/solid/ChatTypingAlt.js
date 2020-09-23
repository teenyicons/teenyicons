import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChatTypingAlt = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0V15H7.5A7.5 7.5 0 010 7.5zM4 8h1V7H4v1zm7 0h-1V7h1v1zM7 8h1V7H7v1z"
          fill={color}
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
