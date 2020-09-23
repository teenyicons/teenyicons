import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLogout = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLogout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLogout.displayName = "Logout";

export default SvgLogout;
