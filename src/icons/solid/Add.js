import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdd = forwardRef(
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
          d="M7 7V1h1v6h6v1H8v6H7V8H1V7h6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdd.displayName = "Add";

export default SvgAdd;
