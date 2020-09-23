import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRewind = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 12.5v-10l-7 5 7 5zM7.5 12.5v-10l-7 5 7 5z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgRewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRewind.displayName = "Rewind";

export default SvgRewind;
