import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBatteryCharge = forwardRef(
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
          d="M0 11.5A1.5 1.5 0 001.5 13h10a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0011.5 2h-10A1.5 1.5 0 000 3.5v8zm6.724-6.447A.5.5 0 006 5.5v3.191L2.724 7.053l-.448.894 4 2A.5.5 0 007 9.5V6.309l3.276 1.638.448-.894-4-2z"
          fill={color}
        />
        <path d="M15 5v5h-1V5h1z" fill={color} />
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
