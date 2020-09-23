import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSpreadsheet = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.995H4v1h.5v-1zm6 1h.5v-1h-.5v1zm-6 2.505H4v.5h.5v-.5zm6 0v.5h.5v-.5h-.5zm-6-6.503H4v1h.5v-1zm6 1h.5v-1h-.5v1zm3-1.497h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-6 7.495h6v-1h-6v1zM4.5 11h6v-1h-6v1zm0-6.003h6v-1h-6v1zm8 9.003h-10v1h10v-1zM2 13.5v-12H1v12h1zm11-10v10h1v-10h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zm2 3v6h1v-6H4zm3 0v6h1v-6H7zm3 0v6h1v-6h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSpreadsheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSpreadsheet.displayName = "Spreadsheet";

export default SvgSpreadsheet;
