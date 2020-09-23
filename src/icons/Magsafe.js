import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMagsafe = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 2.5v-2h8v2m-6 9V15m4-3.5V15m-5-5.5v2h6v-2m-9-7h12v7h-12v-7z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgMagsafe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMagsafe.displayName = "Magsafe";

export default SvgMagsafe;
