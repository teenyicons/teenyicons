import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSun = forwardRef(
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
          d="M8 2V0H7v2h1zM3.207 2.498L1.5.792.793 1.5 2.5 3.206l.707-.708zM12.5 3.206L14.207 1.5 13.5.792l-1.707 1.706.707.708zM7.5 3.997a3.499 3.499 0 100 6.996 3.499 3.499 0 100-6.996zM2 6.995H0v1h2v-1zM15 6.995h-2v1h2v-1zM1.5 14.199l1.707-1.707-.707-.707-1.707 1.706.707.708zM14.207 13.491L12.5 11.785l-.707.707L13.5 14.2l.707-.708zM8 14.99v-1.998H7v1.999h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSun.displayName = "Sun";

export default SvgSun;
