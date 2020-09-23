import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAirplay = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          d="M.5 1a.5.5 0 00-.5.5v10a.5.5 0 00.5.5H3v-1H1V2h13v9h-2v1h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H.5z"
          fill={color}
        />
        <path
          d="M7.854 9.146a.5.5 0 00-.708 0l-4 4A.5.5 0 003.5 14h8a.5.5 0 00.354-.854l-4-4z"
          fill={color}
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
