import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgFloorplan = forwardRef(
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
          d="M0 0h4.651l3.126 2.084-.554.832L4.349 1H1v13h5V8H4V7h5v1H7v6h7V8h-2V7h2V1h-4V0h5v15H0V0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgFloorplan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgFloorplan.displayName = "Floorplan";

export default SvgFloorplan;
