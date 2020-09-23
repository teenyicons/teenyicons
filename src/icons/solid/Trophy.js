import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTrophy = forwardRef(
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
          d="M4.5 0A1.5 1.5 0 003 1.5V2h-.5a2.5 2.5 0 000 5h.756A4.504 4.504 0 007 9.973V14H4v1h7v-1H8V9.973A4.504 4.504 0 0011.744 7h.756a2.5 2.5 0 000-5H12v-.5A1.5 1.5 0 0010.5 0h-6zM12 3v2.5c0 .169-.01.336-.027.5h.527a1.5 1.5 0 000-3H12zM2.5 3H3v2.5c0 .169.01.336.027.5H2.5a1.5 1.5 0 110-3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTrophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTrophy.displayName = "Trophy";

export default SvgTrophy;
