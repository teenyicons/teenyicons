import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessage = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          clipRule="evenodd"
          d="M5.5 11.493l2 2.998 2-2.998h4c.553 0 1-.447 1-1V1.5c0-.552-.447-.999-1-.999h-12c-.553 0-1 .447-1 1v8.993c0 .553.447 1 1 1h4z"
          stroke={color}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgMessage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessage.displayName = "Message";

export default SvgMessage;
