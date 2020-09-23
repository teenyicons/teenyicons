import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAirpods = forwardRef(
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
          d="M7 3.5A3.148 3.148 0 003.461.376l-.32.04a3.167 3.167 0 00-1.508.609L0 2.25v2.5l1.633 1.225c.441.33.96.54 1.508.609l.32.04c.182.023.362.03.539.022V15h3V3.5zM4 4H2V3h2v1zM8 3.5A3.148 3.148 0 0111.539.376l.32.04a3.167 3.167 0 011.508.609L15 2.25v2.5l-1.633 1.225c-.441.33-.96.54-1.508.609l-.32.04a3.18 3.18 0 01-.539.022V15H8V3.5zm3 .5h2V3h-2v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAirpods.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAirpods.displayName = "Airpods";

export default SvgAirpods;
