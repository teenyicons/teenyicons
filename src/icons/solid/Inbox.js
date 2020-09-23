import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInbox = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5V8h-4.5a.5.5 0 00-.5.5 2.5 2.5 0 01-5 0 .5.5 0 00-.5-.5H0V1.5z"
          fill={color}
        />
        <path
          d="M0 9v4.5A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5V9h-4.035a3.5 3.5 0 01-6.93 0H0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInbox.displayName = "Inbox";

export default SvgInbox;
