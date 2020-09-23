import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStrikethrough = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3.5 10A3.5 3.5 0 007 13.5h1.487a3.013 3.013 0 003.013-3.013c0-1.205-.892-2.512-2-2.987M6.08 6.177A2.607 2.607 0 014.5 3.781 2.281 2.281 0 016.781 1.5H8A2.5 2.5 0 0110.5 4M2 7.5h11"
          stroke={color}
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
