import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBehance = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 9.5v.5h.5v-.5h-.5zm-14-7V2H0v.5h.5zm0 10H0v.5h.5v-.5zm7.5-3a3.5 3.5 0 003.5 3.5v-1A2.5 2.5 0 019 9.5H8zM11.5 6A3.5 3.5 0 008 9.5h1A2.5 2.5 0 0111.5 7V6zM15 9.5A3.5 3.5 0 0011.5 6v1A2.5 2.5 0 0114 9.5h1zm-1.473 1.464A2.496 2.496 0 0111.5 12v1a3.496 3.496 0 002.837-1.45l-.81-.586zM.5 3H3V2H.5v1zM3 7H.5v1H3V7zm-2 .5v-5H0v5h1zM5 5a2 2 0 01-2 2v1a3 3 0 003-3H5zM3 3a2 2 0 012 2h1a3 3 0 00-3-3v1zM.5 8H4V7H.5v1zM4 12H.5v1H4v-1zm-3 .5v-5H0v5h1zM6 10a2 2 0 01-2 2v1a3 3 0 003-3H6zM4 8a2 2 0 012 2h1a3 3 0 00-3-3v1zm4.5 2h6V9h-6v1zM9 4h5V3H9v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBehance.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBehance.displayName = "Behance";

export default SvgBehance;
