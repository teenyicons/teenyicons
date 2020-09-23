import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAudioCable = forwardRef(
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
          d="M7.854.146a.5.5 0 00-.708 0l-1 1A.5.5 0 006 1.5V3h3V1.5a.5.5 0 00-.146-.354l-1-1zM9 4v4H6V4h3zM10 9v3.5A1.5 1.5 0 018.5 14H8v1H7v-1h-.5A1.5 1.5 0 015 12.5V9h5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAudioCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAudioCable.displayName = "AudioCable";

export default SvgAudioCable;
