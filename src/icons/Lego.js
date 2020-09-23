import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLego = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 3h8V2h-8v1zM13 4.5v8h1v-8h-1zM11.5 14h-8v1h8v-1zM2 12.5v-8H1v8h1zM3.5 14A1.5 1.5 0 012 12.5H1A2.5 2.5 0 003.5 15v-1zm9.5-1.5a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM11.5 3A1.5 1.5 0 0113 4.5h1A2.5 2.5 0 0011.5 2v1zm-8-1A2.5 2.5 0 001 4.5h1A1.5 1.5 0 013.5 3V2zM5 8h1V7H5v1zm4 0h1V7H9v1zm1.1 1.7a3.25 3.25 0 01-5.2 0l-.8.6c1.7 2.267 5.1 2.267 6.8 0l-.8-.6zM5 2.5v-1H4v1h1zM5.5 1h4V0h-4v1zm4.5.5v1h1v-1h-1zM9.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 009.5 0v1zM5 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 004 1.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLego.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLego.displayName = "Lego";

export default SvgLego;
