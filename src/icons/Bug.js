import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBug = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4.5h6m-6 0l-.367.733A6 6 0 003.5 7.916V10.5a4 4 0 008 0V7.916a6 6 0 00-.633-2.683L10.5 4.5m-6 0v-1a3 3 0 016 0v1M0 8.5h3.5m11.5 0h-3.5M1 14l3-1.5M14 14l-3-1.5M1 3l3 1.5M14 3l-3 1.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBug.displayName = "Bug";

export default SvgBug;
