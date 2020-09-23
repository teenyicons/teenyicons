import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgOmega = forwardRef(
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
          d="M1 6.5a6.5 6.5 0 119 6.002V14h5v1H9v-2.83V12h.026a.499.499 0 01.307-.313 5.5 5.5 0 10-3.667 0c.152.053.261.172.308.313H6v3H0v-1h5v-1.498A6.502 6.502 0 011 6.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgOmega.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgOmega.displayName = "Omega";

export default SvgOmega;
