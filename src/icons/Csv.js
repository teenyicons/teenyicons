import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCsv = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-4 6V6H6v.5h.5zm0 2H6V9h.5v-.5zm2 0H9V8h-.5v.5zm0 2v.5H9v-.5h-.5zm2-1H10v.207l.146.147.354-.354zm1 1l-.354.354.354.353.354-.353-.354-.354zm1-1l.354.354.146-.147V9.5h-.5zm-10-3V6H2v.5h.5zm0 4H2v.5h.5v-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM9 6H6.5v1H9V6zm-3 .5v2h1v-2H6zM6.5 9h2V8h-2v1zM8 8.5v2h1v-2H8zm.5 1.5H6v1h2.5v-1zM10 6v3.5h1V6h-1zm.146 3.854l1 1 .708-.708-1-1-.708.708zm1.708 1l1-1-.708-.708-1 1 .708.708zM13 9.5V6h-1v3.5h1zM5 6H2.5v1H5V6zm-3 .5v4h1v-4H2zm.5 4.5H5v-1H2.5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCsv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCsv.displayName = "Csv";

export default SvgCsv;
