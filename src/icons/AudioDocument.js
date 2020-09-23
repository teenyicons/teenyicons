import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAudioDocument = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-3 4l.4-.3a.5.5 0 00-.9.3h.5zm.3.4l.4-.3-.4.3zm4.7 9.1h-10v1h10v-1zM2 13.5v-12H1v12h1zm11-10v10h1v-10h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM6 11a1 1 0 01-1-1H4a2 2 0 002 2v-1zm1-1a1 1 0 01-1 1v1a2 2 0 002-2H7zM6 9a1 1 0 011 1h1a2 2 0 00-2-2v1zm0-1a2 2 0 00-2 2h1a1 1 0 011-1V8zm1-1.5V10h1V6.5H7zM8 7V4.5H7V7h1zm-.9-2.2l.3.4.8-.6-.3-.4-.8.6zm.3.4A4.5 4.5 0 0011 7V6a3.5 3.5 0 01-2.8-1.4l-.8.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAudioDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAudioDocument.displayName = "AudioDocument";

export default SvgAudioDocument;
