import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMinimiseAlt = forwardRef(
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
          d="M13.854 1.854L10.707 5H13v1H9V2h1v2.293l3.146-3.147.708.708zM2 9h4v4H5v-2.293l-3.146 3.147-.708-.707L4.293 10H2V9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMinimiseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMinimiseAlt.displayName = "MinimiseAlt";

export default SvgMinimiseAlt;
