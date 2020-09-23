import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTextDocument = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.995H4v1h.5v-1zm6 1h.5v-1h-.5v1zm-6 1.998H4v1h.5v-1zm6 1.007h.5v-1h-.5v1zm-6-7.003H4v1h.5v-1zM8.5 5H9V4h-.5v1zm2-4.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zm-9 4.495h6v-1h-6v1zm0 2.998l6 .007v-1l-6-.007v1zm0-5.996L8.5 5V4l-4-.003v1zm8 9.003h-10v1h10v-1zM2 13.5v-12H1v12h1zM2.5 1h8V0h-8v1zM13 3.5v10h1v-10h-1zM10.146.854l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTextDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTextDocument.displayName = "TextDocument";

export default SvgTextDocument;
