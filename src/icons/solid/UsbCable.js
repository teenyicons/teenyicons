import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUsbCable = forwardRef(
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
          d="M11 0H4v6h7V0zM6 4V2h1v2H6zm2 0V2h1v2H8z"
          fill={color}
        />
        <path
          d="M12 7H3v3.5A1.5 1.5 0 004.5 12H5v2h1v1h1v-1h1v1h1v-1h1v-2h.5a1.5 1.5 0 001.5-1.5V7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUsbCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUsbCable.displayName = "UsbCable";

export default SvgUsbCable;
