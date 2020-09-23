import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeadset = forwardRef(
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
          d="M2.5 6c-.525 0-1.012.162-1.414.438a6.502 6.502 0 0112.828 0A2.488 2.488 0 0012.5 6 1.5 1.5 0 0011 7.5v4a1.5 1.5 0 00.947 1.395A1.5 1.5 0 0110.5 14H8v1h2.5a2.5 2.5 0 002.458-2.042A2.5 2.5 0 0015 10.5v-3a7.5 7.5 0 00-15 0v3A2.5 2.5 0 002.5 13 1.5 1.5 0 004 11.5v-4A1.5 1.5 0 002.5 6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHeadset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeadset.displayName = "Headset";

export default SvgHeadset;
