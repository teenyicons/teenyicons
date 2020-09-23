import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgThumbtack = forwardRef(
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
          d="M8.702 1.41L8.146.853l.708-.708 6 6-.707.708-.556-.556-4.456 7.13.719.718-.708.708L5 10.707.854 14.854l-.708-.707L4.293 10 .146 5.854l.708-.708.718.72 7.13-4.457z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgThumbtack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgThumbtack.displayName = "Thumbtack";

export default SvgThumbtack;
