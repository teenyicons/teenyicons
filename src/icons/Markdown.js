import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMarkdown = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 5.5l.354-.354A.5.5 0 002 5.5h.5zm2 2l-.354.354.354.353.354-.353L4.5 7.5zm2-2H7a.5.5 0 00-.854-.354L6.5 5.5zm4 4l-.354.354.354.353.354-.353L10.5 9.5zM1.5 3h12V2h-12v1zm12.5.5v8h1v-8h-1zm-.5 8.5h-12v1h12v-1zM1 11.5v-8H0v8h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 13v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 3a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 2v1zm-12-1A1.5 1.5 0 000 3.5h1a.5.5 0 01.5-.5V2zM3 10V5.5H2V10h1zm-.854-4.146l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708zM6 5.5V10h1V5.5H6zm4-.5v4.5h1V5h-1zM8.146 7.854l2 2 .708-.708-2-2-.708.708zm2.708 2l2-2-.708-.708-2 2 .708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMarkdown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMarkdown.displayName = "Markdown";

export default SvgMarkdown;
