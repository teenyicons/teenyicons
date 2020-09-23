import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRefreshAlt = forwardRef(
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
          d="M7.5 1A6.5 6.5 0 001 7.5H0a7.5 7.5 0 0113-5.1v-2.4h1v4h-4V3h2.19A6.48 6.48 0 007.5 1zm0 13A6.5 6.5 0 0014 7.5h1a7.5 7.5 0 01-13 5.099V15H1v-4h4v1H2.81a6.48 6.48 0 004.69 2z"
          fill={color}
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
