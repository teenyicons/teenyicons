import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgChatTyping = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 11.493l.416-.278a.5.5 0 00-.416-.222v.5zm2 2.998l-.416.277a.5.5 0 00.832 0l-.416-.277zm2-2.998v-.5a.5.5 0 00-.416.222l.416.278zm-4.416.277l2 2.998.832-.555-2-2.998-.832.555zm2.832 2.998l2-2.998-.832-.555-2 2.998.832.555zM9.5 11.993h4v-1h-4v1zm4 0c.829 0 1.5-.67 1.5-1.5h-1c0 .277-.223.5-.5.5v1zm1.5-1.5V1.5h-1v8.994h1zM15 1.5C15 .67 14.329 0 13.5 0v1c.277 0 .5.223.5.5h1zM13.5 0h-12v1h12V0zm-12 0C.671 0 0 .67 0 1.5h1c0-.277.223-.5.5-.5V0zM0 1.5v8.993h1V1.5H0zm0 8.993c0 .83.671 1.5 1.5 1.5v-1a.499.499 0 01-.5-.5H0zm1.5 1.5h4v-1h-4v1zM7 7h1V6H7v1zM4 7h1V6H4v1zm6 0h1V6h-1v1z"
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
