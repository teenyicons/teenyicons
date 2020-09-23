import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScreenAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 14.5h11m-5.5-4v4m-7-13v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgScreenAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScreenAlt.displayName = "ScreenAlt";

export default SvgScreenAlt;
