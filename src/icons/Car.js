import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCar = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 6.497h.5v-.139l-.071-.119-.429.258zm-14 0l-.429-.258L0 6.36v.138h.5zm2.126-3.541l-.429-.258.429.258zm9.748 0l.429-.258-.429.258zM3.5 11.5V11H3v.5h.5zm8 0h.5V11h-.5v.5zM14 6.497V12.5h1V6.497h-1zM.929 6.754l2.126-3.54-.858-.516L.071 6.24l.858.515zM5.198 2h4.604V1H5.198v1zm6.747 1.213l2.126 3.541.858-.515-2.126-3.54-.858.514zM2.5 13h-1v1h1v-1zm.5-1.5v1h1v-1H3zM13.5 13h-1v1h1v-1zm-1.5-.5v-1h-1v1h1zm-.5-1.5h-8v1h8v-1zM1 12.5V6.497H0V12.5h1zm11.5.5a.5.5 0 01-.5-.5h-1a1.5 1.5 0 001.5 1.5v-1zm-10 1A1.5 1.5 0 004 12.5H3a.5.5 0 01-.5.5v1zm-1-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 14v-1zM9.802 2a2.5 2.5 0 012.143 1.213l.858-.515A3.5 3.5 0 009.802 1v1zM3.055 3.213A2.5 2.5 0 015.198 2V1a3.5 3.5 0 00-3 1.698l.857.515zM14 12.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM2 10h3V9H2v1zm11-1h-3v1h3V9zM3 7h9V6H3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCar.displayName = "Car";

export default SvgCar;
