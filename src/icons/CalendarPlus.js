import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarPlus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 0v5m8-5v5m-4 1v5M5 8.5h5m-8.5-6h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCalendarPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalendarPlus.displayName = "CalendarPlus";

export default SvgCalendarPlus;
