import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVennDiagram = forwardRef(
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
          d="M7.5 15a5.502 5.502 0 01-5.255-3.873A6.47 6.47 0 005.5 12c.698 0 1.37-.11 2-.313.63.203 1.302.313 2 .313a6.47 6.47 0 003.255-.873A5.503 5.503 0 017.5 15zM13.954 8.727A5.5 5.5 0 009 .023a6.5 6.5 0 012.96 4.748 6.484 6.484 0 011.994 3.956zM6 .022a5.5 5.5 0 00-4.954 8.704A6.484 6.484 0 013.04 4.772 6.5 6.5 0 016 .022zM2.005 9.747A5.477 5.477 0 006 10.977a6.5 6.5 0 01-2.953-4.704 5.475 5.475 0 00-1.04 3.474zM13 9.5c0-1.205-.388-2.32-1.046-3.227a6.5 6.5 0 01-2.953 4.705 5.477 5.477 0 003.994-1.23c.003-.083.005-.165.005-.248zM7.5.375a5.515 5.515 0 013.255 3.498A6.47 6.47 0 007.5 3a6.47 6.47 0 00-3.255.873A5.515 5.515 0 017.5.375zM7.5 4c-1.327 0-2.544.47-3.495 1.253A5.502 5.502 0 007.5 10.625a5.502 5.502 0 003.495-5.372A5.477 5.477 0 007.5 4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVennDiagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVennDiagram.displayName = "VennDiagram";

export default SvgVennDiagram;
