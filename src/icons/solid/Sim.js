import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSim = forwardRef(
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
          d="M9.707 0H2.5A1.5 1.5 0 001 1.5v12A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5V4.293L9.707 0zM7 6H4V5h4v7H7V6zM6 9H4V8h2v1zm-2 3h2v-1H4v1zm7-6H9V5h2v1zM9 9h2V8H9v1zm2 3H9v-1h2v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSim.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSim.displayName = "Sim";

export default SvgSim;
