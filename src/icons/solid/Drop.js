import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDrop = forwardRef(
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
          d="M7.847.14a.5.5 0 00-.694 0L2.867 4.283l-.004.003a6.237 6.237 0 00-1.747 3.23 6.12 6.12 0 00.394 3.63 6.35 6.35 0 002.4 2.806A6.65 6.65 0 007.5 15a6.65 6.65 0 003.59-1.048 6.348 6.348 0 002.4-2.805 6.12 6.12 0 00.394-3.63 6.238 6.238 0 00-1.747-3.23L7.847.14z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDrop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDrop.displayName = "Drop";

export default SvgDrop;
