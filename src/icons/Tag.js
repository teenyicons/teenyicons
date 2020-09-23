import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTag = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 7.5l-.354-.354a.5.5 0 000 .708L.5 7.5zm7 7l-.354.354a.5.5 0 00.708 0L7.5 14.5zm7-7l.354.354A.5.5 0 0015 7.5h-.5zm-7-7V0a.5.5 0 00-.354.146L7.5.5zM.146 7.854l7 7 .708-.708-7-7-.708.708zm7.708 7l7-7-.708-.708-7 7 .708.708zM15 7.5v-6h-1v6h1zM13.5 0h-6v1h6V0zM7.146.146l-7 7 .708.708 7-7-.708-.708zM15 1.5A1.5 1.5 0 0013.5 0v1a.5.5 0 01.5.5h1zM10.5 5a.5.5 0 01-.5-.5H9A1.5 1.5 0 0010.5 6V5zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0012 4.5h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0010.5 3v1zm0-1A1.5 1.5 0 009 4.5h1a.5.5 0 01.5-.5V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTag.displayName = "Tag";

export default SvgTag;
