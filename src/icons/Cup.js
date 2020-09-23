import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCup = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11.5 6.5v5a3 3 0 01-3 3h-5a3 3 0 01-3-3v-5a1 1 0 011-1h9a1 1 0 011 1zm0 0h2a1 1 0 011 1v2a1 1 0 01-1 1h-2M4.5 4V2m3 2V0"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCup.displayName = "Cup";

export default SvgCup;
