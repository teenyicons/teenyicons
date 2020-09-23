import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarNoAccess = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 0v5m8-5v5m-2 1.5l-4 4m-4-8h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1zm6 9a3 3 0 110-6 3 3 0 010 6z"
          stroke={color}
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
