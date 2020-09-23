import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMobile = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6 11.5h3m-5.5 3h8a1 1 0 001-1v-12a1 1 0 00-1-1h-8a1 1 0 00-1 1v12a1 1 0 001 1z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMobile.displayName = "Mobile";

export default SvgMobile;
