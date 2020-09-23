import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlarm = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 3.5l3-3m8 0l3 3M7.5 5v3.5H10m-2.5-6a6 6 0 100 12 6 6 0 000-12z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAlarm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlarm.displayName = "Alarm";

export default SvgAlarm;
