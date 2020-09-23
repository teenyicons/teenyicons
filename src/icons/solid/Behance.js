import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBehance = forwardRef(
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
          d="M0 2h3a3 3 0 012.051 5.19A3.001 3.001 0 014 13H0V2zm1 6v4h3a2 2 0 100-4H1zm0-1h2a2 2 0 100-4H1v4zm13-3H9V3h5v1zM8 9.5a3.5 3.5 0 117 0v.5H9.05a2.5 2.5 0 004.477.964l.81.586A3.5 3.5 0 018 9.5zM9.05 9h4.9a2.5 2.5 0 00-4.9 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBehance.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBehance.displayName = "Behance";

export default SvgBehance;
