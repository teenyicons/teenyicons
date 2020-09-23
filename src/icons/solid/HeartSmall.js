import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeartSmall = forwardRef(
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
          d="M6.765 5.235a1.79 1.79 0 10-2.53 2.53L7.5 11.03l3.265-3.265a1.79 1.79 0 00-2.53-2.53L7.5 5.97l-.735-.735z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHeartSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeartSmall.displayName = "HeartSmall";

export default SvgHeartSmall;
