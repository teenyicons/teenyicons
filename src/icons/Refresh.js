import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRefresh = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 14.5A7 7 0 013.17 2M7.5.5A7 7 0 0111.83 13m-.33-3v3.5H15M0 1.5h3.5V5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgRefresh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRefresh.displayName = "Refresh";

export default SvgRefresh;
