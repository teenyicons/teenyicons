import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDatabase = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 2.499c0 1.103-3.134 1.998-7 1.998S.5 3.602.5 2.5m14 0C14.5 1.395 11.366.5 7.5.5s-7 .895-7 1.999m14 0v9.993c0 1.103-3.134 1.999-7 1.999s-7-.895-7-1.999V2.5m14 4.996c0 1.104-3.134 2-7 2s-7-.896-7-2"
          stroke={color}
          strokeLinecap="square"
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
