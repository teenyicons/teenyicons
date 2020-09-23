import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSvg = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-8 6V6H2v.5h.5zm0 2H2V9h.5v-.5zm2 0H5V8h-.5v.5zm0 2v.5H5v-.5h-.5zm2-1H6v.207l.146.147L6.5 9.5zm1 1l-.354.354.354.353.354-.353L7.5 10.5zm1-1l.354.354L9 9.707V9.5h-.5zm2-3V6H10v.5h.5zm0 4H10v.5h.5v-.5zm2 0v.5h.5v-.5h-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM5 6H2.5v1H5V6zm-3 .5v2h1v-2H2zM2.5 9h2V8h-2v1zM4 8.5v2h1v-2H4zm.5 1.5H2v1h2.5v-1zM6 6v3.5h1V6H6zm.146 3.854l1 1 .708-.708-1-1-.708.708zm1.708 1l1-1-.708-.708-1 1 .708.708zM9 9.5V6H8v3.5h1zM13 6h-2.5v1H13V6zm-3 .5v4h1v-4h-1zm.5 4.5h2v-1h-2v1zm2.5-.5v-2h-1v2h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSvg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSvg.displayName = "Svg";

export default SvgSvg;
