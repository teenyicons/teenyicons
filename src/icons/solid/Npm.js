import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNpm = forwardRef(
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
          d="M0 4h15v7H7v2H4v-2H0V4zm4 6V5H1v5h1V6h1v4h1zm1-5v7h1v-2h2V5H5zm4 0v5h1V6h1v4h1V6h1v4h1V5H9zM6 9V6h1v3H6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNpm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNpm.displayName = "Npm";

export default SvgNpm;
