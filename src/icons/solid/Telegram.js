import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTelegram = forwardRef(
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
          d="M14.993 1.582a.5.5 0 00-.661-.553l-14 5a.5.5 0 00-.056.918l4 2a.5.5 0 00.501-.031l3.32-2.214L6.11 9.188a.5.5 0 00.113.728l6 4a.5.5 0 00.77-.334l2-12z"
          fill={color}
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
