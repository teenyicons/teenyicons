import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.5 7.5a3 3 0 11-6 0 3 3 0 016 0zm0 0v1a2 2 0 104 0v-1a7 7 0 10-3 5.745"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgAt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAt.displayName = "At";

export default SvgAt;
