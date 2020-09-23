import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearchSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8.5 8.5l2 2M7 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSearchSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSearchSmall.displayName = "SearchSmall";

export default SvgSearchSmall;
