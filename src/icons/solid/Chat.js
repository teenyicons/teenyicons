import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChat = forwardRef(
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
          d="M7.5 0A7.498 7.498 0 000 7.495a7.498 7.498 0 007.5 7.496c1.306 0 2.91-.328 4.054-.947l2.79.922a.5.5 0 00.63-.634l-.926-2.771c.672-1.173.952-2.706.952-4.066A7.498 7.498 0 007.5 0z"
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
