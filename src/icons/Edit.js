import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEdit = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 10.5l-.354-.354-.146.147v.207h.5zm10-10l.354-.354a.5.5 0 00-.708 0L10.5.5zm4 4l.354.354a.5.5 0 000-.708L14.5 4.5zm-10 10v.5h.207l.147-.146L4.5 14.5zm-4 0H0a.5.5 0 00.5.5v-.5zm.354-3.646l10-10-.708-.708-10 10 .708.708zm9.292-10l4 4 .708-.708-4-4-.708.708zm4 3.292l-10 10 .708.708 10-10-.708-.708zM4.5 14h-4v1h4v-1zm-3.5.5v-4H0v4h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEdit.displayName = "Edit";

export default SvgEdit;
