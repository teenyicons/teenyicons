import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFirebase = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2.5 11.5l9-8 1 9-5 2-5-3zm0 0l5-9 2 3m-7 6l1-11 3 3"
          stroke={color}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgFirebase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFirebase.displayName = "Firebase";

export default SvgFirebase;
