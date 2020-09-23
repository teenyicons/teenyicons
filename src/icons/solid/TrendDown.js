import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTrendDown = forwardRef(
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
          d="M.146 3.854l.708-.708L5 7.293l3-3 6 6V5h1v7H8v-1h5.293L8 5.707l-3 3L.146 3.854z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTrendDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTrendDown.displayName = "TrendDown";

export default SvgTrendDown;
