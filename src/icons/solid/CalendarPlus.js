import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendarPlus = forwardRef(
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
          d="M13.5 2H12V0h-1v2H4V0H3v2H1.5A1.5 1.5 0 000 3.5v10A1.5 1.5 0 001.5 15h12a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0013.5 2zM7 11V9H5V8h2V6h1v2h2v1H8v2H7z"
          fill={color}
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
