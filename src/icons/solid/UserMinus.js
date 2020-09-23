import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUserMinus = forwardRef(
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
          d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zM10 8h5V7h-5v1zM7.5 8.994h-4a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUserMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUserMinus.displayName = "UserMinus";

export default SvgUserMinus;
