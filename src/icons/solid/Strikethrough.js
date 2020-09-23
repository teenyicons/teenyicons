import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStrikethrough = forwardRef(
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
          d="M4 3.781A2.781 2.781 0 016.781 1H8a3 3 0 013 3h-1a2 2 0 00-2-2H6.781C5.797 2 5 2.797 5 3.781c0 .843.502 1.605 1.277 1.937l-.394.919A3.107 3.107 0 014 3.78zM9.392 8H2V7h11v1h-2.01c.123.14.237.287.34.44.405.602.67 1.326.67 2.047A3.513 3.513 0 018.487 14H7a4 4 0 01-4-4h1a3 3 0 003 3h1.487A2.513 2.513 0 0011 10.487c0-.484-.182-1.017-.5-1.488-.296-.44-.69-.797-1.108-.999z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStrikethrough.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStrikethrough.displayName = "Strikethrough";

export default SvgStrikethrough;
