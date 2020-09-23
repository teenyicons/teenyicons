import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHospital = forwardRef(
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
          d="M7.724.053a.5.5 0 00-.448 0l-5.99 2.995A.5.5 0 001 3.5V14H0v1h5v-5h5v5h5v-1h-1V3.5a.5.5 0 00-.286-.452L7.724.053zM7 5V3h1v2h2v1H8v2H7V6H5V5h2z"
          fill={color}
        />
        <path d="M9 15v-4H6v4h3z" fill={color} />
      </svg>
    );
  }
);

SvgHospital.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHospital.displayName = "Hospital";

export default SvgHospital;
