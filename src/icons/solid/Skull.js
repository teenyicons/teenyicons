import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSkull = forwardRef(
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
          d="M4 7.5a.5.5 0 111 0 .5.5 0 01-1 0zM10 7.5a.5.5 0 111 0 .5.5 0 01-1 0z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 6.5a6.5 6.5 0 0113 0v3.382a1.5 1.5 0 01-.83 1.342l-1.17.585v.691A2.5 2.5 0 019.5 15h-4A2.5 2.5 0 013 12.5v-.691l-1.17-.585A1.5 1.5 0 011 9.882V6.5zM4.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.146 9.146a.5.5 0 01.708 0l1 1-.708.708-.646-.647-.646.647-.708-.708 1-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSkull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSkull.displayName = "Skull";

export default SvgSkull;
