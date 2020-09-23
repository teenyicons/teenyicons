import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderTop = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13 4.5h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m5 3h1m-7 0h1m5 3h1m-4 0h1m-4 0h1m-4 0h1m-4 0h1m-1-3h1m-1-3h1m2 0h1m-4-3h1m-1-3h13"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBorderTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderTop.displayName = "BorderTop";

export default SvgBorderTop;
