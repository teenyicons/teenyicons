import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSkull = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 11.5H4v-.309l-.276-.138-.224.447zm-1.447-.724l.223-.447-.223.447zm10.894 0l-.223-.447.223.447zM11.5 11.5l-.224-.447-.276.138v.309h.5zm-4-2l.354-.354a.5.5 0 00-.708 0L7.5 9.5zM2 9.882V6.5H1v3.382h1zM13 6.5v3.382h1V6.5h-1zm-9.276 4.553l-1.448-.724-.447.895 1.447.723.448-.894zm9-.724l-1.448.724.448.894 1.447-.723-.447-.895zM4 12.5v-1H3v1h1zm7-1v1h1v-1h-1zM9.5 14h-4v1h4v-1zm1.5-1.5A1.5 1.5 0 019.5 14v1a2.5 2.5 0 002.5-2.5h-1zm2-2.618a.5.5 0 01-.276.447l.447.895A1.5 1.5 0 0014 9.882h-1zM7.5 1A5.5 5.5 0 0113 6.5h1A6.5 6.5 0 007.5 0v1zM3 12.5A2.5 2.5 0 005.5 15v-1A1.5 1.5 0 014 12.5H3zm-1-6A5.5 5.5 0 017.5 1V0A6.5 6.5 0 001 6.5h1zM1 9.882a1.5 1.5 0 00.83 1.342l.446-.895A.5.5 0 012 9.882H1zM4.5 8a.5.5 0 01-.5-.5H3A1.5 1.5 0 004.5 9V8zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 006 7.5H5zM4.5 7a.5.5 0 01.5.5h1A1.5 1.5 0 004.5 6v1zm0-1A1.5 1.5 0 003 7.5h1a.5.5 0 01.5-.5V6zm6 2a.5.5 0 01-.5-.5H9A1.5 1.5 0 0010.5 9V8zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0012 7.5h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0010.5 6v1zm0-1A1.5 1.5 0 009 7.5h1a.5.5 0 01.5-.5V6zm-3.646 4.854l1-1-.708-.708-1 1 .708.708zm.292-1l1 1 .708-.708-1-1-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSkull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSkull.displayName = "Skull";

export default SvgSkull;
