import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLoop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 3.5l.354.354a.5.5 0 000-.708L14.5 3.5zm-14 8l-.354-.354a.5.5 0 000 .708L.5 11.5zM11.146.854l3 3 .708-.708-3-3-.708.708zm3 2.292l-3 3 .708.708 3-3-.708-.708zm-10.292 11l-3-3-.708.708 3 3 .708-.708zm-3-2.292l3-3-.708-.708-3 3 .708.708zM.5 12h11v-1H.5v1zM15 8.5V7h-1v1.5h1zM11.5 12A3.5 3.5 0 0015 8.5h-1a2.5 2.5 0 01-2.5 2.5v1zm3-9h-11v1h11V3zM0 6.5V8h1V6.5H0zM3.5 3A3.5 3.5 0 000 6.5h1A2.5 2.5 0 013.5 4V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLoop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLoop.displayName = "Loop";

export default SvgLoop;
