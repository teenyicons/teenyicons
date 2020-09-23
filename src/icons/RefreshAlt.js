import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRefreshAlt = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 7.5A7 7 0 0113 3.17m1.5 4.33A7 7 0 012 11.83m3-.33H1.5V15m12-15v3.5H10"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgRefreshAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRefreshAlt.displayName = "RefreshAlt";

export default SvgRefreshAlt;
