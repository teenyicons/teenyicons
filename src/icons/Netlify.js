import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNetlify = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 7.5l-.354-.354a.5.5 0 000 .708L.5 7.5zm7-7l.354-.354a.5.5 0 00-.708 0L7.5.5zm7 7l.354.354a.5.5 0 000-.708L14.5 7.5zm-7 7l-.354.354a.5.5 0 00.708 0L7.5 14.5zM.854 7.854l7-7-.708-.708-7 7 .708.708zm6.292-7l7 7 .708-.708-7-7-.708.708zm7 6.292l-7 7 .708.708 7-7-.708-.708zm-6.292 7l-7-7-.708.708 7 7 .708-.708zM4.314 3.964l10 4 .372-.928-10-4-.372.928zM8.58 1.728l-5.5 8.5.84.544 5.5-8.5-.84-.544zM2.1 5.8l6 8 .8-.6-6-8-.8.6zM.394 7.989l11.5 2.5.212-.978-11.5-2.5-.212.978zm2.32 1.963l9.5-4.5-.428-.904-9.5 4.5.428.904zm7.292-6.53l-1.5 9.5.988.156 1.5-9.5-.988-.156z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNetlify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNetlify.displayName = "Netlify";

export default SvgNetlify;
