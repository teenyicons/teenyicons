import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPatreon = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5.5h-2v14h2V.5zM4.5 5.5a5 5 0 1010 0 5 5 0 00-10 0z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPatreon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPatreon.displayName = "Patreon";

export default SvgPatreon;
