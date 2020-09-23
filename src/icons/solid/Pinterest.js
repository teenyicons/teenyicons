import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPinterest = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 114.584 6.912l1.911-4.367c.48.592 1.21.955 2.005.955A3.5 3.5 0 0012 7.5V7a4 4 0 00-4-4H7a4 4 0 00-4 4v.5c0 .896.337 1.715.891 2.333l.745-.666A2.489 2.489 0 014 7.5V7a3 3 0 013-3h1a3 3 0 013 3v.5A2.5 2.5 0 018.5 10c-.68 0-1.285-.435-1.5-1.081l-.005-.016.963-2.203-.916-.4L3.69 13.96A7.496 7.496 0 010 7.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPinterest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPinterest.displayName = "Pinterest";

export default SvgPinterest;
