import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgIndentDecrease = forwardRef(
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
          d="M15 4H3V3h12v1zM1.207 7.5l1.647-1.646-.708-.708-2 2a.5.5 0 000 .708l2 2 .708-.708L1.207 7.5zM15 8H7V7h8v1zm0 4H3v-1h12v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgIndentDecrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgIndentDecrease.displayName = "IndentDecrease";

export default SvgIndentDecrease;
