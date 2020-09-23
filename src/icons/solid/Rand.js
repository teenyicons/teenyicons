import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRand = forwardRef(
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
          d="M3 1h5a4 4 0 012.117 7.395A3.5 3.5 0 0112 11.5V14h-1v-2.5A2.5 2.5 0 008.5 9H4v5H3V1zm1 7h4a3 3 0 000-6H4v6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRand.displayName = "Rand";

export default SvgRand;
