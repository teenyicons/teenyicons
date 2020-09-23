import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLanCable = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 11.5V15m2-3.5V15M6 9.5h3M6.5.5v2h2v-2m-4 0h6v4h1v3l-2 4h-4l-2-4v-3h1v-4zm2 4v2a1 1 0 002 0v-2h-2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLanCable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLanCable.displayName = "LanCable";

export default SvgLanCable;
