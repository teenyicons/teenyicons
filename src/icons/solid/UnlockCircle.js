import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUnlockCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zM7.621 4C6.726 4 6 4.726 6 5.621V6h3.5A1.5 1.5 0 0111 7.5v3A1.5 1.5 0 019.5 12h-4A1.5 1.5 0 014 10.5v-3a1.5 1.5 0 011-1.415v-.464a2.621 2.621 0 014.475-1.853l.379.378-.708.708-.378-.38A1.621 1.621 0 007.62 4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUnlockCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUnlockCircle.displayName = "UnlockCircle";

export default SvgUnlockCircle;
