import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoc = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 6.5V6H2v.5h.5zm0 4H2v.5h.5v-.5zm10-4h.5V6h-.5v.5zm0 4v.5h.5v-.5h-.5zm1-7h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zM2 6.5v4h1v-4H2zm.5 4.5h1v-1h-1v1zM5 9.5v-2H4v2h1zM3.5 6h-1v1h1V6zM5 7.5A1.5 1.5 0 003.5 6v1a.5.5 0 01.5.5h1zM3.5 11A1.5 1.5 0 005 9.5H4a.5.5 0 01-.5.5v1zM6 7.5v2h1v-2H6zm3 2v-2H8v2h1zm0-2A1.5 1.5 0 007.5 6v1a.5.5 0 01.5.5h1zM7.5 11A1.5 1.5 0 009 9.5H8a.5.5 0 01-.5.5v1zM6 9.5A1.5 1.5 0 007.5 11v-1a.5.5 0 01-.5-.5H6zm1-2a.5.5 0 01.5-.5V6A1.5 1.5 0 006 7.5h1zM10 6v5h1V6h-1zm.5 1h2V6h-2v1zm1.5-.5V8h1V6.5h-1zM10.5 11h2v-1h-2v1zm2.5-.5V9h-1v1.5h1zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoc.displayName = "Doc";

export default SvgDoc;
