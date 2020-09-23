import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWebpack = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 10.5v-6m0 6l6 3.5m-6-3.5L5 9M1.5 4.5l6-3.5m-6 3.5l6 3m0-6.5l6 3.5M7.5 1v3.5m6 0v6m0-6l-6 3m6 3l-6 3.5m6-3.5L10 9m-2.5 5V7.5m0-3L5 6v3m2.5-4.5L10 6v3M5 9l2.5 1.5L10 9"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgWebpack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWebpack.displayName = "Webpack";

export default SvgWebpack;
