import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStamp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 14.5h15m-8.5-8v3m2-3v3m-1-3a3 3 0 110-6 3 3 0 010 6zm-7 6v-1a2 2 0 012-2h10a2 2 0 012 2v1H.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgStamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStamp.displayName = "Stamp";

export default SvgStamp;
