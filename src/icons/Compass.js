import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCompass = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 10.5l-.447-.224a.5.5 0 00.67.671L4.5 10.5zm2-4l-.224-.447a.5.5 0 00-.223.223L6.5 6.5zm4-2l.447.224a.5.5 0 00-.67-.671l.223.447zm-2 4l.224.447a.5.5 0 00.223-.223L8.5 8.5zm-1 5.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM4.947 10.724l2-4-.894-.448-2 4 .894.448zm1.777-3.777l4-2-.448-.894-4 2 .448.894zm3.329-2.67l-2 4 .894.447 2-4-.894-.448zM8.276 8.052l-4 2 .448.894 4-2-.448-.894z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCompass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCompass.displayName = "Compass";

export default SvgCompass;
