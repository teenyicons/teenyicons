import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoreVertical = forwardRef(
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
          d="M6.5 2.5a1 1 0 112 0 1 1 0 01-2 0zm0 5a1 1 0 112 0 1 1 0 01-2 0zm0 5a1 1 0 112 0 1 1 0 01-2 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMoreVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoreVertical.displayName = "MoreVertical";

export default SvgMoreVertical;
