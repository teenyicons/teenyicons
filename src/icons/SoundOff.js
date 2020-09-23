import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSoundOff = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 10.494l.257-.429-.119-.07H3.5v.5zm0-5.996v.5h.138l.12-.071-.258-.429zm5-2.998H9a.5.5 0 00-.757-.429L8.5 1.5zm0 11.992l-.257.429A.5.5 0 009 13.492h-.5zm2.94-7.763l-.354-.353-.707.707.354.354.706-.708zm2.12 3.534l.354.353.707-.707-.354-.353-.707.707zm.708-2.826l.353-.354-.707-.707-.353.353.707.708zm-3.535 2.119l-.354.353.707.707.354-.353-.707-.707zM3.5 9.994h-2v1h2v-1zm-2 0a.499.499 0 01-.5-.5H0c0 .83.671 1.5 1.5 1.5v-1zm-.5-.5V5.498H0v3.998h1zm0-3.997c0-.276.223-.499.5-.499v-1c-.829 0-1.5.67-1.5 1.5h1zm.5-.499h2v-1h-2v1zm2.257-.071l5-2.998-.514-.858-5 2.998.514.858zM8 1.5v11.992h1V1.5H8zm.757 11.563l-5-2.998-.514.858 5 2.998.514-.858zm1.976-6.626l2.827 2.826.707-.707-2.828-2.827-.707.708zm2.828-.708l-2.828 2.827.707.707 2.828-2.826-.707-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSoundOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSoundOff.displayName = "SoundOff";

export default SvgSoundOff;
