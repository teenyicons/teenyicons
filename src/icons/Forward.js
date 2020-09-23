import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgForward = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 12.5v-10l7 5-7 5zM7.5 12.5v-10l7 5-7 5z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgForward.displayName = "Forward";

export default SvgForward;
