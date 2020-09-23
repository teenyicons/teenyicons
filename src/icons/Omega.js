import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgOmega = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.333 11.687a.5.5 0 10.334.943l-.334-.943zm-4 .943a.5.5 0 10.334-.943l-.334.943zM5.5 14.5v.5H6v-.5h-.5zm4 0H9v.5h.5v-.5zM7.5 1A5.5 5.5 0 0113 6.5h1A6.5 6.5 0 007.5 0v1zm0-1A6.5 6.5 0 001 6.5h1A5.5 5.5 0 017.5 1V0zM13 6.5a5.503 5.503 0 01-3.667 5.187l.334.943A6.503 6.503 0 0014 6.5h-1zm-7.333 5.187A5.503 5.503 0 012 6.5H1c0 2.83 1.81 5.238 4.333 6.13l.334-.943zM0 15h5.5v-1H0v1zm6-.5V12H5v2.5h1zm9-.5H9.5v1H15v-1zm-5 .5V12H9v2.5h1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgOmega.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgOmega.displayName = "Omega";

export default SvgOmega;
