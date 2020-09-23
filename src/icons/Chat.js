import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChat = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11.5 13.5l.157-.475-.218-.072-.197.119.258.428zm2-2l-.421-.27-.129.202.076.226.474-.158zm1 2.99l-.157.476a.5.5 0 00.631-.634l-.474.159zm-3.258-1.418c-.956.575-2.485.919-3.742.919v1c1.385 0 3.106-.37 4.258-1.063l-.516-.856zM7.5 13.99c-3.59 0-6.5-2.909-6.5-6.496H0a7.498 7.498 0 007.5 7.496v-1zM1 7.495A6.498 6.498 0 017.5 1V0A7.498 7.498 0 000 7.495h1zM7.5 1C11.09 1 14 3.908 14 7.495h1A7.498 7.498 0 007.5 0v1zM14 7.495c0 1.331-.296 2.758-.921 3.735l.842.54C14.686 10.575 15 8.937 15 7.495h-1zm-2.657 6.48l3 .99.314-.949-3-.99-.314.949zm3.631.357l-1-2.99-.948.316 1 2.991.948-.317z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgChat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChat.displayName = "Chat";

export default SvgChat;
