import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAirplay = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3 11.5H.5v-10h14v10H12m-4.5-2l-4 4h8l-4-4z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgAirplay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAirplay.displayName = "Airplay";

export default SvgAirplay;
