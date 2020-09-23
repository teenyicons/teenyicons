import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScreenAlt2 = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 14.5h11m-7.5-4v4m4-4v4m-9-13v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgScreenAlt2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScreenAlt2.displayName = "ScreenAlt2";

export default SvgScreenAlt2;
