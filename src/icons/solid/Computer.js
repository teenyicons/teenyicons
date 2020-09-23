import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgComputer = forwardRef(
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
        <path d="M10 12h3v-1h-3v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 0A1.5 1.5 0 008 1.5V3H1.5A1.5 1.5 0 000 4.5v6A1.5 1.5 0 001.5 12H6v2H4v1h9.5a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0013.5 0h-4zM8.085 14H7v-2h1v1.5c0 .175.03.344.085.5zM9.5 14h4a.5.5 0 00.5-.5V6H9v7.5a.5.5 0 00.5.5zM9 5h5V1.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgComputer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgComputer.displayName = "Computer";

export default SvgComputer;
