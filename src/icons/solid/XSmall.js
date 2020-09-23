import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgXSmall = forwardRef(
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
          d="M6.793 7.5L4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646-.708.707L7.5 8.207l-2.646 2.646-.708-.707L6.793 7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgXSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgXSmall.displayName = "XSmall";

export default SvgXSmall;
