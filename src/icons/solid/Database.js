import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDatabase = forwardRef(
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
          d="M7.5 0C5.534 0 3.736.227 2.413.605c-.658.188-1.227.42-1.643.701C.372 1.576 0 1.97 0 2.5v9.993c0 .53.372.924.77 1.192.416.281.985.514 1.643.702 1.323.378 3.121.605 5.087.605 1.966 0 3.764-.227 5.087-.605.658-.188 1.227-.421 1.643-.702.398-.268.77-.662.77-1.192V2.5c0-.53-.372-.924-.77-1.193-.416-.28-.985-.513-1.643-.701C11.264.227 9.466 0 7.5 0zM1.262 2.864l.452.214c1.127.534 3.27.92 5.786.92 2.517 0 4.659-.386 5.786-.92l.452-.214.428.904-.452.214c-1.323.627-3.638 1.017-6.214 1.017-2.576 0-4.891-.39-6.214-1.017l-.452-.215.428-.903zm.452 5.184l-.452-.214-.428.904.452.214c1.323.627 3.638 1.017 6.214 1.017 2.576 0 4.891-.39 6.214-1.017l.452-.214-.428-.904-.452.214c-1.127.534-3.27.92-5.786.92-2.517 0-4.659-.386-5.786-.92z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDatabase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDatabase.displayName = "Database";

export default SvgDatabase;
