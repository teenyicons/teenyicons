import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAudioCable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 1.5l-.354-.354A.5.5 0 006 1.5h.5zm1-1l.354-.354a.5.5 0 00-.708 0L7.5.5zm1 1H9a.5.5 0 00-.146-.354L8.5 1.5zM6.5 9h2V8h-2v1zm2.5.5v3h1v-3H9zM8.5 13h-2v1h2v-1zM6 12.5v-3H5v3h1zm.5.5a.5.5 0 01-.5-.5H5A1.5 1.5 0 006.5 14v-1zm2.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5H9zM8.5 9a.5.5 0 01.5.5h1A1.5 1.5 0 008.5 8v1zm-2-1A1.5 1.5 0 005 9.5h1a.5.5 0 01.5-.5V8zm.5.5v-5H6v5h1zM6.5 4h2V3h-2v1zM8 3.5v5h1v-5H8zM7 13v2h1v-2H7zm0-9.5v-2H6v2h1zm-.146-1.646l1-1-.708-.708-1 1 .708.708zm.292-1l1 1 .708-.708-1-1-.708.708zM8 1.5v2h1v-2H8z"
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
