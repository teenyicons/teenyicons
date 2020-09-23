import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChatbot = forwardRef(
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
        <path d="M7.5 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2H8V0H7v2H6a6 6 0 000 12h3c.13 0 .26-.004.389-.013l3.99.998a.5.5 0 00.606-.606l-.577-2.309A6 6 0 009 2zM5 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM7.5 12a4.483 4.483 0 01-2.813-.987l.626-.78c.599.48 1.359.767 2.187.767.828 0 1.588-.287 2.187-.767l.626.78A4.483 4.483 0 017.5 12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgChatbot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChatbot.displayName = "Chatbot";

export default SvgChatbot;
