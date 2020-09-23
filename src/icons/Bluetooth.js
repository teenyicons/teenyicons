import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBluetooth = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 14.5H7a.5.5 0 00.787.41L7.5 14.5zm0-14l.287-.41A.5.5 0 007 .5h.5zm5 3.5l.282.413a.5.5 0 00.005-.823L12.5 4zm0 7l.287.41a.5.5 0 00-.005-.823L12.5 11zM8 14.5V7.41H7v7.09h1zm0-7.09V.5H7v6.91h1zM7.213.91l5 3.5.574-.82-5-3.5-.574.82zm5.005 2.677l-5 3.409.564.826 5-3.409-.564-.826zm-5 3.409l-6 4.09.564.827 6-4.09-.564-.827zm.569 7.914l5-3.5-.574-.82-5 3.5.574.82zm4.995-4.323l-11-7.5-.564.826 11 7.5.564-.826z"
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
