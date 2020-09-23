import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGoogle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 0112.857-5.249l-.714.7A6.5 6.5 0 1013.98 8H8V7h7v.5a7.5 7.5 0 01-15 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGoogle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGoogle.displayName = "Google";

export default SvgGoogle;
