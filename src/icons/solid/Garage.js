import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGarage = forwardRef(
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
          d="M7.21.093a.5.5 0 01.58 0l7 5A.5.5 0 0115 5.5v9a.5.5 0 01-.5.5H13V7H2v8H.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.21-.407l7-5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 15h9v-4H3v4zm6-2H6v-1h3v1z"
          fill={color}
        />
        <path d="M12 10V8H3v2h9z" fill={color} />
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
