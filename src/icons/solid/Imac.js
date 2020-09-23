import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImac = forwardRef(
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
          d="M13.5 0A1.5 1.5 0 0115 1.5V7H0V1.5A1.5 1.5 0 011.5 0h12zM0 8v1.5A1.5 1.5 0 001.5 11H7v3H2v1h11v-1H8v-3h5.5A1.5 1.5 0 0015 9.5V8H0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgImac.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImac.displayName = "Imac";

export default SvgImac;
