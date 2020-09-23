import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSafari = forwardRef(
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
          d="M4.958 10.042l1.906-3.178 3.178-1.906-1.906 3.178-3.178 1.906z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5A7.5 7.5 0 017.5 0 7.5 7.5 0 0115 7.5 7.5 7.5 0 017.5 15 7.5 7.5 0 010 7.5zm11.929-3.743a.5.5 0 00-.686-.686L6.136 6.136 3.07 11.243a.5.5 0 00.686.686l5.107-3.065 3.065-5.107z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSafari.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSafari.displayName = "Safari";

export default SvgSafari;
