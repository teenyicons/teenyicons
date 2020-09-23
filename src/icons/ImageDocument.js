import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImageDocument = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm1 7.995l.354-.353-.353-.354-.354.354.353.353zm-3 2.998l-.39.313.349.436.394-.395-.353-.354zM4.5 6.5l.39-.313-.403-.503L4.1 6.2l.4.3zm8 7.5h-10v1h10v-1zM2 13.5v-12H1v12h1zm11-10v10h1v-10h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM10 6h1V5h-1v1zm3.854 4.147l-2-2.005-.708.707 2 2.004.708-.706zm-2.707-2.005l-3 2.998.706.707 3-2.998-.706-.707zM8.89 11.18l-4-4.994-.78.626 4 4.993.78-.625zM4.1 6.2l-3 4 .8.6 3-4-.8-.6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgImageDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImageDocument.displayName = "ImageDocument";

export default SvgImageDocument;
