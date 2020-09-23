import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTarget = forwardRef(
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
        <path d="M7 7.5a.5.5 0 111 0 .5.5 0 01-1 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM3 7.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTarget.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTarget.displayName = "Target";

export default SvgTarget;
