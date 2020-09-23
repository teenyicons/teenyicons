import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInfoSmall = forwardRef(
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
          d="M8 3.99V5H7V3.99h1zM6 11v-1h1V8H6V7h2v3h1v1H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInfoSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInfoSmall.displayName = "InfoSmall";

export default SvgInfoSmall;
