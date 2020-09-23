import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarMinus = forwardRef(
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
          d="M13.5 2H12V0h-1v2H4V0H3v2H1.5A1.5 1.5 0 000 3.5v10A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0013.5 2zM5 9h5V8H5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCalendarMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalendarMinus.displayName = "CalendarMinus";

export default SvgCalendarMinus;
