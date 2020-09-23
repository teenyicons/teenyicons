import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAddSmall = forwardRef(
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
          d="M7 7V4h1v3h3v1H8v3H7V8H4V7h3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAddSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAddSmall.displayName = "AddSmall";

export default SvgAddSmall;
