import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImage = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 3.5l.354-.354a.5.5 0 00-.708 0L4.5 3.5zM1.5 1h12V0h-12v1zm12.5.5v12h1v-12h-1zM13.5 14h-12v1h12v-1zM1 13.5v-12H0v12h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 0v1zm-12-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0zm-1 11h14v-1H.5v1zm.354-3.146l4-4-.708-.708-4 4 .708.708zm3.292-4l7 7 .708-.708-7-7-.708.708zM10.5 5a.5.5 0 01-.5-.5H9A1.5 1.5 0 0010.5 6V5zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0012 4.5h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0010.5 3v1zm0-1A1.5 1.5 0 009 4.5h1a.5.5 0 01.5-.5V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgImage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImage.displayName = "Image";

export default SvgImage;
