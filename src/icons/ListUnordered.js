import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgListUnordered = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4 7.5h11m-15 0h2m2-4h11m-15 0h2m2 8h11m-15 0h2"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgListUnordered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgListUnordered.displayName = "ListUnordered";

export default SvgListUnordered;
