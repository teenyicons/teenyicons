import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLocation = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5v14m7-7.005H.5m13 0a6.006 6.006 0 01-6 6.005c-3.313 0-6-2.694-6-6.005a5.999 5.999 0 016-5.996c3.313 0 6 2.686 6 5.996z"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgLocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLocation.displayName = "Location";

export default SvgLocation;
