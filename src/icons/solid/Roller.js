import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRoller = forwardRef(
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
          d="M0 1.5A1.5 1.5 0 011.5 0h10A1.5 1.5 0 0113 1.5v.55a2.5 2.5 0 012 2.45v1.491a2.5 2.5 0 01-1.813 2.404L8.363 9.774a.5.5 0 00-.363.48V11h1.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H7v-.746a1.5 1.5 0 011.088-1.442l4.824-1.378A1.5 1.5 0 0014 5.99V4.5a1.5 1.5 0 00-1-1.415V3.5A1.5 1.5 0 0111.5 5h-10A1.5 1.5 0 010 3.5v-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRoller.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRoller.displayName = "Roller";

export default SvgRoller;
