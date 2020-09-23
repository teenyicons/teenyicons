import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTv = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 11.5v2m10-2v2M1 13.5h3m7 0h3M.5 2.5v8a1 1 0 001 1h12a1 1 0 001-1v-8a1 1 0 00-1-1h-12a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgTv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTv.displayName = "Tv";

export default SvgTv;
