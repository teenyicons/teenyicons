import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarNoAccess = forwardRef(
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
          d="M7.5 6a2.5 2.5 0 00-2.086 3.879L8.88 6.414A2.488 2.488 0 007.5 6zM7.5 11c-.51 0-.983-.152-1.379-.414L9.586 7.12A2.5 2.5 0 017.5 11z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 2H12V0h-1v2H4V0H3v2H1.5A1.5 1.5 0 000 3.5v10A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0013.5 2zM4 8.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCalendarNoAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalendarNoAccess.displayName = "CalendarNoAccess";

export default SvgCalendarNoAccess;
