import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNote = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.5 14.5H10a.5.5 0 00.854.354L10.5 14.5zm0-4V10a.5.5 0 00-.5.5h.5zm4 0l.354.354A.5.5 0 0014.5 10v.5zM1.5 1h12V0h-12v1zM1 13.5v-12H0v12h1zm13-12v8.586h1V1.5h-1zM10.086 14H1.5v1h8.586v-1zm3.768-3.56l-3.415 3.414.707.707 3.415-3.415-.707-.707zM10.086 15a1.5 1.5 0 001.06-.44l-.707-.706a.5.5 0 01-.353.146v1zM14 10.086a.5.5 0 01-.146.353l.707.707a1.5 1.5 0 00.439-1.06h-1zM0 13.5A1.5 1.5 0 001.5 15v-1a.5.5 0 01-.5-.5H0zM13.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 0v1zm-12-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zM11 14.5v-4h-1v4h1zm-.5-3.5h4v-1h-4v1zm3.646-.854l-4 4 .708.708 4-4-.708-.708zM3 4h9V3H3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNote.displayName = "Note";

export default SvgNote;
