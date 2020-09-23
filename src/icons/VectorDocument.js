import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVectorDocument = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-7 4V4H3v.5h.5zm2 0H6V4h-.5v.5zm0 2V7H6v-.5h-.5zm-2 0H3V7h.5v-.5zm8-2h.5V4h-.5v.5zm0 2V7h.5v-.5h-.5zm-2 0H9V7h.5v-.5zm0-2V4H9v.5h.5zm-6 6V10H3v.5h.5zm2 0H6V10h-.5v.5zm0 2v.5H6v-.5h-.5zm-2 0H3v.5h.5v-.5zm6-2V10H9v.5h.5zm0 2H9v.5h.5v-.5zm2 0v.5h.5v-.5h-.5zm0-2h.5V10h-.5v.5zm1 3.5h-10v1h10v-1zM2 13.5v-12H1v12h1zm11-10v10h1v-10h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM3.5 5h2V4h-2v1zM5 4.5v2h1v-2H5zM5.5 6h-2v1h2V6zM4 6.5v-2H3v2h1zm7-2v2h1v-2h-1zm.5 1.5h-2v1h2V6zm-1.5.5v-2H9v2h1zM9.5 5h2V4h-2v1zm-6 6h2v-1h-2v1zm1.5-.5v2h1v-2H5zm.5 1.5h-2v1h2v-1zm-1.5.5v-2H3v2h1zm5-2v2h1v-2H9zm.5 2.5h2v-1h-2v1zm2.5-.5v-2h-1v2h1zm-.5-2.5h-2v1h2v-1zm-6-4h4V5h-4v1zM4 6.5v4h1v-4H4zm6 0v4h1v-4h-1zM5.5 12h4v-1h-4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVectorDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVectorDocument.displayName = "VectorDocument";

export default SvgVectorDocument;
