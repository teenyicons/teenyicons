import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSafari = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 11.5l-.429-.257a.5.5 0 00.686.686L3.5 11.5zm3-5l-.257-.429-.107.065-.065.107.429.257zm5-3l.429.257a.5.5 0 00-.686-.686l.257.429zm-3 5l.257.429.107-.065.065-.107L8.5 8.5zm5.5-1A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM3.929 11.757l3-5-.858-.514-3 5 .858.514zM6.757 6.93l5-3-.514-.858-5 3 .514.858zm4.314-3.686l-3 5 .858.514 3-5-.858-.514zM8.243 8.07l-5 3 .514.858 5-3-.514-.858z"
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
