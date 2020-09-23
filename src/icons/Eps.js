import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEps = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm0 6V6H10v.5h.5zm0 2H10V9h.5v-.5zm2 0h.5V8h-.5v.5zm0 2v.5h.5v-.5h-.5zm-6-4V6H6v.5h.5zm2 0H9V6h-.5v.5zm0 2V9H9v-.5h-.5zm-6-2V6H2v.5h.5zm0 4H2v.5h.5v-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM13 6h-2.5v1H13V6zm-3 .5v2h1v-2h-1zm.5 2.5h2V8h-2v1zm1.5-.5v2h1v-2h-1zm.5 1.5H10v1h2.5v-1zm-6-3h2V6h-2v1zM8 6.5v2h1v-2H8zM7 11V8.5H6V11h1zm0-2.5v-2H6v2h1zM8.5 8h-2v1h2V8zM5 6H2.5v1H5V6zm-3 .5v4h1v-4H2zm.5 4.5H5v-1H2.5v1zm0-2H5V8H2.5v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEps.displayName = "Eps";

export default SvgEps;
