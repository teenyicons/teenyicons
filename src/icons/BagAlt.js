import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBagAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M10.5 2v2.5a3 3 0 01-6 0V2m-3-.5v12a1 1 0 001 1h10a1 1 0 001-1v-12a1 1 0 00-1-1h-10a1 1 0 00-1 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBagAlt.displayName = "BagAlt";

export default SvgBagAlt;
