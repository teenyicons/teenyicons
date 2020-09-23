import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCup = forwardRef(
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
        <path d="M7 4h1V0H7v4zM5 2v2H4V2h1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.5A1.5 1.5 0 011.5 5h9a1.5 1.5 0 011.415 1H13.5A1.5 1.5 0 0115 7.5v2a1.5 1.5 0 01-1.5 1.5H12v.5A3.5 3.5 0 018.5 15h-5A3.5 3.5 0 010 11.5v-5zM12 10h1.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5H12v3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCup.displayName = "Cup";

export default SvgCup;
