import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInvoice = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.995H4v1h.5v-1zm6 1h.5v-1h-.5v1zM4.5 9.5H4v.5h.5v-.5zm6 0v.5h.5v-.5h-.5zm-6-4V5H4v.5h.5zm6 0h.5V5h-.5v.5zm3-2h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-6 7.495h6v-1h-6v1zM4.5 10h6V9h-6v1zm0-4h6V5h-6v1zm8 8h-10v1h10v-1zM2 13.5v-12H1v12h1zm11-10v10h1v-10h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zm2 4v4h1v-4H4zm3 0v4h1v-4H7zm3 0v4h1v-4h-1zM4 4h3V3H4v1zm4 8h3v-1H8v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInvoice.displayName = "Invoice";

export default SvgInvoice;
