import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgIndentIncrease = forwardRef(
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
          d="M15 4H3V3h12v1zM.854 5.146l2 2a.5.5 0 010 .708l-2 2-.708-.708L1.793 7.5.146 5.854l.708-.708zM15 8H7V7h8v1zm0 4H3v-1h12v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgIndentIncrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgIndentIncrease.displayName = "IndentIncrease";

export default SvgIndentIncrease;
