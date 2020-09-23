import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinimise = forwardRef(
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
          d="M13.854 1.854L10.707 5H13v1H9V2h1v2.293l3.146-3.147.708.708zM4.293 5L1.146 1.854l.708-.708L5 4.293V2h1v4H2V5h2.293zM2 9h4v4H5v-2.293l-3.146 3.147-.708-.707L4.293 10H2V9zm7 0h4v1h-2.293l3.147 3.146-.708.708L10 10.707V13H9V9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMinimise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMinimise.displayName = "Minimise";

export default SvgMinimise;
