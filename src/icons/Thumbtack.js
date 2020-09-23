import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgThumbtack = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 14.5L5 10M.5 5.5l9 9m-1-14l6 6m-13 0l8-5m-1 12l5-8"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgThumbtack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgThumbtack.displayName = "Thumbtack";

export default SvgThumbtack;
