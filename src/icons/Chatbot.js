import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChatbot = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9 2.5V2v.5zm-3 0V3v-.5zm6.856 9.422l-.35-.356-.205.2.07.277.485-.12zM13.5 14.5l-.121.485a.5.5 0 00.606-.606l-.485.12zm-4-1l-.354-.354-.624.625.857.214.121-.485zm.025-.025l.353.354a.5.5 0 00-.4-.852l.047.498zM.5 8H0h.5zM7 0v2.5h1V0H7zm2 2H6v1h3V2zm6 6a6 6 0 00-6-6v1a5 5 0 015 5h1zm-1.794 4.279A5.983 5.983 0 0015 7.999h-1a4.983 4.983 0 01-1.495 3.567l.701.713zm.78 2.1L13.34 11.8l-.97.242.644 2.578.97-.242zm-4.607-.394l4 1 .242-.97-4-1-.242.97zm-.208-.863l-.025.024.708.707.024-.024-.707-.707zM9 14c.193 0 .384-.01.572-.027l-.094-.996A5.058 5.058 0 019 13v1zm-3 0h3v-1H6v1zM0 8a6 6 0 006 6v-1a5 5 0 01-5-5H0zm6-6a6 6 0 00-6 6h1a5 5 0 015-5V2zm1.5 6A1.5 1.5 0 016 6.5H5A2.5 2.5 0 007.5 9V8zM9 6.5A1.5 1.5 0 017.5 8v1A2.5 2.5 0 0010 6.5H9zM7.5 5A1.5 1.5 0 019 6.5h1A2.5 2.5 0 007.5 4v1zm0-1A2.5 2.5 0 005 6.5h1A1.5 1.5 0 017.5 5V4zm0 8c1.064 0 2.042-.37 2.813-.987l-.626-.78c-.6.48-1.359.767-2.187.767v1zm-2.813-.987c.77.617 1.75.987 2.813.987v-1a3.483 3.483 0 01-2.187-.767l-.626.78z"
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
