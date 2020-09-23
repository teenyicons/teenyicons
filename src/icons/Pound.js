import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPound = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 14.5l1.103-.367A2.775 2.775 0 003.5 11.5V4.442A3.942 3.942 0 017.442.5h.865C9.934.5 11.396 1.49 12 3M3 13h1.084a6 6 0 012.683.633l.05.025a6 6 0 005.366 0L13.5 13M1 7.5h8"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPound.displayName = "Pound";

export default SvgPound;
