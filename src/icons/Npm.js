import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNpm = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 10.5v2h2v-2h8v-6H.5v6h4zm0 0v-6m4 0v6M6.5 6v3m-4-3v4.5m8-4.5v4.5m2-4.5v4.5"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgNpm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNpm.displayName = "Npm";

export default SvgNpm;
