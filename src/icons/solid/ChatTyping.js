import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChatTyping = forwardRef(
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
          d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.993c0 .83-.671 1.5-1.5 1.5H9.768l-1.852 2.775a.5.5 0 01-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5V1.5zM4 7h1V6H4v1zm3 0h1V6H7v1zm4 0h-1V6h1v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgChatTyping.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgChatTyping.displayName = "ChatTyping";

export default SvgChatTyping;
