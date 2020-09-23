import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTelegram = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 1.5l-14 5 4 2 6-4-4 5 6 4 2-12z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgTelegram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTelegram.displayName = "Telegram";

export default SvgTelegram;
