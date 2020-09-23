import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAnchor = forwardRef(
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
          d="M7.5 1A1.5 1.5 0 006 2.499a1.5 1.5 0 003 0A1.5 1.5 0 007.5 1zM5 2.499a2.5 2.5 0 113 2.448v9.025a6.499 6.499 0 005.981-5.977H12v-1h3v.5a7.498 7.498 0 01-7.5 7.496A7.498 7.498 0 010 7.495v-.5h3v1H1.019A6.499 6.499 0 007 13.972V4.947A2.5 2.5 0 015 2.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAnchor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAnchor.displayName = "Anchor";

export default SvgAnchor;
