import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRewindSmall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 9.5v-4L3 7.5l3.5 2zM10.5 9.5v-4L7 7.5l3.5 2z"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgRewindSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRewindSmall.displayName = "RewindSmall";

export default SvgRewindSmall;
