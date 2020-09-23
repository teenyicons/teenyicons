import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNodejs = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11.5 6v-.167c0-.736-.597-1.333-1.333-1.333H9a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3H9A1.5 1.5 0 017.5 9m-2-5v5.264a2 2 0 01-1.106 1.789L3.5 11.5m-2-1v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgNodejs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNodejs.displayName = "Nodejs";

export default SvgNodejs;
