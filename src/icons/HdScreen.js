import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHdScreen = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 13.5h11m-5.5-3V14m6.69-2.589a24.35 24.35 0 00-13.38 0 .243.243 0 01-.31-.234V1.823c0-.162.155-.279.31-.234a24.35 24.35 0 0013.38 0 .243.243 0 01.31.234v9.354a.243.243 0 01-.31.234z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgHdScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHdScreen.displayName = "HdScreen";

export default SvgHdScreen;
