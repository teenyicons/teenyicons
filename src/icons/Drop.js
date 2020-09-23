import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDrop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5.5l4.286 4.142a5.737 5.737 0 011.607 2.971 5.62 5.62 0 01-.362 3.334 5.85 5.85 0 01-2.21 2.584A6.15 6.15 0 017.5 14.5a6.15 6.15 0 01-3.32-.97 5.85 5.85 0 01-2.211-2.583 5.62 5.62 0 01-.363-3.334 5.737 5.737 0 011.608-2.97L7.5.5z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgDrop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDrop.displayName = "Drop";

export default SvgDrop;
