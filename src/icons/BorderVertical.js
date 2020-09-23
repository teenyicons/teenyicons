import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderVertical = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1 1.5h1m8 0h1m2 0h1m-1 3h1m-1 3h1m-4 0h1m2 3h1m-1 3h1m-4 0h1m-7 0h1m-4 0h1m-1-3h1m-1-3h1m2 0h1m-4-3h1m2-3h1M7.5 1v13"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBorderVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderVertical.displayName = "BorderVertical";

export default SvgBorderVertical;
