import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBracket = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 7.5h2m13 0h-2m-8 7H3.5a2 2 0 01-2-2v-10a2 2 0 012-2H5m5 14h1.5a2 2 0 002-2v-10a2 2 0 00-2-2H10"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgBracket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBracket.displayName = "Bracket";

export default SvgBracket;
