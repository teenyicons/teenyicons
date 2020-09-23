import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHourglass = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 0v4.672a2 2 0 00.586 1.414l.707.707a1 1 0 010 1.414l-1 1a1 1 0 00-.293.707V15m8-15v5.086a1 1 0 01-.293.707l-1 1a1 1 0 000 1.414l1 1a1 1 0 01.293.707V15M1 .5h13m-13 14h13"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgHourglass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHourglass.displayName = "Hourglass";

export default SvgHourglass;
