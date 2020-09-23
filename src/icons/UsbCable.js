import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUsbCable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 5.5h6m-6 0a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1m-6 0v-5h6v5M6.5 2v2m2-2v2m-3 7.5v2h4v-2m-3 2V15m2-1.5V15"
          stroke={color}
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
