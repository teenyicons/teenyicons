import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBluetooth = forwardRef(
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
          d="M7.27.057a.5.5 0 01.517.033l5 3.5a.5.5 0 01-.005.823L8.254 7.5l4.528 3.087a.5.5 0 01.005.823l-5 3.5A.5.5 0 017 14.5V8.355l-5.218 3.558-.564-.826L6.48 7.5 1.22 3.913l.563-.826L7 6.645V.5a.5.5 0 01.27-.443zM8 8.537l3.62 2.468L8 13.54V8.537zm0-2.074V1.46l3.62 2.535L8 6.463z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBluetooth.displayName = "Bluetooth";

export default SvgBluetooth;
