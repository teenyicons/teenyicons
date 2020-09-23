import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCplusplus = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 9.5c-.64.64-1.509 1-2.414 1H6.5a3 3 0 010-6h.586c.905 0 1.774.36 2.414 1m-2 .5v3M6 7.5h6M10.5 6v3m-9 1.5v-6l6-3.5 6 3.5v6l-6 3.5-6-3.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgCplusplus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCplusplus.displayName = "Cplusplus";

export default SvgCplusplus;
