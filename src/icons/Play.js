import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlay = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 12.5v-10l7 5-7 5z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlay.displayName = "Play";

export default SvgPlay;
