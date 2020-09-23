import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCurvedConnector = forwardRef(
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
          d="M1.5 0a1.5 1.5 0 101.415 2H4.5A2.5 2.5 0 017 4.5v6a3.5 3.5 0 003.5 3.5h1.585a1.5 1.5 0 100-1H10.5A2.5 2.5 0 018 10.5v-6A3.5 3.5 0 004.5 1H2.915A1.5 1.5 0 001.5 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCurvedConnector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCurvedConnector.displayName = "CurvedConnector";

export default SvgCurvedConnector;
