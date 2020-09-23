import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrow = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5.5V0a.5.5 0 00-.5.5h.5zm0 4H0a.5.5 0 00.854.354L.5 4.5zm4-4l.354.354A.5.5 0 004.5 0v.5zM2.146 2.854l12 12 .708-.708-12-12-.708.708zM0 .5v4h1v-4H0zm.854 4.354l4-4-.708-.708-4 4 .708.708zM4.5 0h-4v1h4V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrow.displayName = "Arrow";

export default SvgArrow;
