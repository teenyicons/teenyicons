import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPatreon = forwardRef(
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
          d="M3 0H0v15h3V0zM9.5 0a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPatreon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPatreon.displayName = "Patreon";

export default SvgPatreon;
