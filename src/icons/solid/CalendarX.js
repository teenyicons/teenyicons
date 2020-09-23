import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarX = forwardRef(
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
          d="M13.5 2H12V0h-1v2H4V0H3v2H1.5A1.5 1.5 0 000 3.5v10A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0013.5 2zm-4.354 8.854L7.5 9.207l-1.646 1.646-.708-.707L6.793 8.5 5.146 6.854l.708-.708L7.5 7.793l1.646-1.647.708.708L8.207 8.5l1.647 1.646-.708.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCalendarX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalendarX.displayName = "CalendarX";

export default SvgCalendarX;
