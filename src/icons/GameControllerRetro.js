import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGameControllerRetro = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8 5.5h2M4.5 6v3M3 7.5h3m4 2h2M.5 3.5v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGameControllerRetro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGameControllerRetro.displayName = "GameControllerRetro";

export default SvgGameControllerRetro;
