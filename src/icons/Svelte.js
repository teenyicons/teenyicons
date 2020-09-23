import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSvelte = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.625 8.357l-5.088 3.18m2.968-1.855a3.5 3.5 0 01-3.71-5.937l4.241-2.65A3.5 3.5 0 0112.405 6.5M7.536 5.296a3.5 3.5 0 013.71 5.936l-4.24 2.65A3.5 3.5 0 012.614 8.5m2.8-1.88l5.09-3.179"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgSvelte.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSvelte.displayName = "elte";

export default SvgSvelte;
