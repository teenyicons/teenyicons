import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTopLeft = forwardRef(
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
          d="M1 1h6v1H2.707l11.147 11.146-.708.708L2 2.707V7H1V1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTopLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTopLeft.displayName = "TopLeft";

export default SvgTopLeft;
