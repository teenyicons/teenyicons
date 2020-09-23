import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGarage = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 5.5l-.29-.407A.5.5 0 000 5.5h.5zm7-5l.29-.407a.5.5 0 00-.58 0L7.5.5zm7 5h.5a.5.5 0 00-.21-.407l-.29.407zm-12 2V7H2v.5h.5zm10 0h.5V7h-.5v.5zM1 15V5.5H0V15h1zM.79 5.907l7-5-.58-.814-7 5 .58.814zm6.42-5l7 5 .58-.814-7-5-.58.814zM14 5.5V15h1V5.5h-1zM3 15V7.5H2V15h1zm-.5-7h10V7h-10v1zm9.5-.5V15h1V7.5h-1zM2.5 11h10v-1h-10v1zM6 13h3v-1H6v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGarage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGarage.displayName = "Garage";

export default SvgGarage;
