import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCSharp = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 5v5m2-5v5M8 6.5h5m-5 2h5M8 10l-.402.201A2.831 2.831 0 013.5 7.668v-.336a2.832 2.832 0 014.098-2.533L8 5m-6.5 5.5v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCSharp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCSharp.displayName = "CSharp";

export default SvgCSharp;
