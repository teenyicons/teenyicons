import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWand = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0v2H9V0h1zM5.5.792L7.207 2.5l-.707.707L4.793 1.5 5.5.792zm8.707.708L12.5 3.206l-.707-.707L13.5.792l.707.708zM4 4.997h2v1H4v-1zm9 0h2v1h-2v-1zM7.207 8.495l-6.354 6.35-.706-.708L6.5 7.787l.707.708zm5.293-.707l1.707 1.706-.707.707-1.707-1.706.707-.707zM10 8.994v2H9v-2h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWand.displayName = "Wand";

export default SvgWand;
