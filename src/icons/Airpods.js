import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAirpods = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 3.5a2.648 2.648 0 01-2.977 2.628l-.32-.04a2.667 2.667 0 01-1.27-.513L.5 4.5v-2l1.433-1.075a2.667 2.667 0 011.27-.513l.32-.04A2.648 2.648 0 016.5 3.5zm0 0v11h-2V6m4-2.5a2.648 2.648 0 002.977 2.628l.32-.04c.46-.058.898-.234 1.27-.513L14.5 4.5v-2l-1.433-1.075a2.667 2.667 0 00-1.27-.513l-.32-.04A2.648 2.648 0 008.5 3.5zm0 0v11h2V6M2 3.5h2m7 0h2"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAirpods.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAirpods.displayName = "Airpods";

export default SvgAirpods;
