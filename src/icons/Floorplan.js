import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFloorplan = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10 .5h4.5v14H.5V.5h4l3 2m-1 12v-7M4 7.5h5m3 0h2.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgFloorplan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFloorplan.displayName = "Floorplan";

export default SvgFloorplan;
