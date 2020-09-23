import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGif = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 10.5H2v.5h.5v-.5zm2 0v.5H5v-.5h-.5zm9-7h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zM2 6v4.5h1V6H2zm.5 5h2v-1h-2v1zm2.5-.5v-2H4v2h1zM3 7h2V6H3v1zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM6 7h3V6H6v1zm0 4h3v-1H6v1zm1-4.5v4h1v-4H7zm3.5.5H13V6h-2.5v1zM10 6v5h1V6h-1zm.5 3H12V8h-1.5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGif.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGif.displayName = "Gif";

export default SvgGif;
