import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBatteryCharge = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M12.5 11.5H12h.5zm-1 1v.5-.5zm0-10V2v.5zm1 1h.5-.5zm-12 0H0h.5zm1-1V3v-.5zm-1 9H1 .5zm1 1V12v.5zm5-3l-.224.447A.5.5 0 007 9.5h-.5zm0-4l.224-.447A.5.5 0 006 5.5h.5zm-5.5 6v-8H0v8h1zM1.5 3h10V2h-10v1zm10.5.5v8h1v-8h-1zm-.5 8.5h-10v1h10v-1zm.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM11.5 3a.5.5 0 01.5.5h1A1.5 1.5 0 0011.5 2v1zM1 3.5a.5.5 0 01.5-.5V2A1.5 1.5 0 000 3.5h1zm-1 8A1.5 1.5 0 001.5 13v-1a.5.5 0 01-.5-.5H0zM15 10V5h-1v5h1zM2.276 7.947l4 2 .448-.894-4-2-.448.894zM7 9.5v-4H6v4h1zm-.724-3.553l4 2 .448-.894-4-2-.448.894z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBatteryCharge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBatteryCharge.displayName = "BatteryCharge";

export default SvgBatteryCharge;
