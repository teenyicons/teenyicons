import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCalendar = forwardRef(
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
          d="M12 2h1.5A1.5 1.5 0 0115 3.5v10a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-10A1.5 1.5 0 011.5 2H3V0h1v2h7V0h1v2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCalendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCalendar.displayName = "Calendar";

export default SvgCalendar;
