import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRefresh = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7.5A6.5 6.5 0 007.5 1V0a7.5 7.5 0 015.099 13H15v1h-4v-4h1v2.19a6.48 6.48 0 002-4.69zM2.4 2h-2.4V1h4v4H3V2.81A6.5 6.5 0 007.5 14v1A7.5 7.5 0 012.4 2z"
          fill={color}
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
