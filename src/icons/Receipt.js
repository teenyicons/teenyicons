import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgReceipt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5.5V0a.5.5 0 00-.5.5h.5zm12 0h.5a.5.5 0 00-.5-.5v.5zm0 14l-.224.447A.5.5 0 0014 14.5h-.5zm-2-1l.224-.447a.5.5 0 00-.448 0l.224.447zm-2 1l-.224.447a.5.5 0 00.448 0L9.5 14.5zm-2-1l.224-.447a.5.5 0 00-.448 0l.224.447zm-2 1l-.224.447a.5.5 0 00.448 0L5.5 14.5zm-4 0H1a.5.5 0 00.724.447L1.5 14.5zm2-1l.224-.447a.5.5 0 00-.448 0l.224.447zM1.5 1h12V0h-12v1zM13 .5v14h1V.5h-1zm.724 13.553l-2-1-.448.894 2 1 .448-.894zm-2.448-1l-2 1 .448.894 2-1-.448-.894zm-1.552 1l-2-1-.448.894 2 1 .448-.894zm-2.448-1l-2 1 .448.894 2-1-.448-.894zM2 14.5V.5H1v14h1zm3.724-.447l-2-1-.448.894 2 1 .448-.894zm-2.448-1l-2 1 .448.894 2-1-.448-.894zM4 5h2V4H4v1zm4 0h3V4H8v1zM4 8h2V7H4v1zm4 0h3V7H8v1zm0 3h3v-1H8v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgReceipt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgReceipt.displayName = "Receipt";

export default SvgReceipt;
