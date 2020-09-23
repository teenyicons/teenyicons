import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgComputer = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M9.5 14.5h4a1 1 0 001-1v-12a1 1 0 00-1-1h-4a1 1 0 00-1 1v12a1 1 0 001 1zm0 0H4m2.5-3v3m2-9h6m-4.5 6h3m-11.5-8h7v8h-7a1 1 0 01-1-1v-6a1 1 0 011-1z"
          stroke={color}
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
