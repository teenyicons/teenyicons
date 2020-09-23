import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHeart = forwardRef(
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
          d="M4.036 1a4.036 4.036 0 00-2.854 6.89l5.964 5.964a.5.5 0 00.708 0l5.964-5.965a4.036 4.036 0 00-5.707-5.707l-.611.61-.61-.61A4.036 4.036 0 004.035 1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHeart.displayName = "Heart";

export default SvgHeart;
