import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgScreen = forwardRef(
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
          d="M1.5 1A1.5 1.5 0 000 2.5v8A1.5 1.5 0 001.5 12h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 1h-12zM4 15h7v-1H4v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgScreen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgScreen.displayName = "Screen";

export default SvgScreen;
