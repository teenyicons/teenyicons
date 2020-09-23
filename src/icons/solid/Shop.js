import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShop = forwardRef(
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
          d="M14 1H1V0h13v1zM1.01 2.402A.5.5 0 011.5 2h12a.5.5 0 01.49.402l1 5A.5.5 0 0114.5 8H.5a.5.5 0 01-.49-.598l1-5zM1 9v5H0v1h15v-1h-1V9h-2v2H3V9H1z"
          fill={color}
        />
        <path d="M4 9h7v1H4V9z" fill={color} />
      </svg>
    );
  }
);

SvgShop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShop.displayName = "Shop";

export default SvgShop;
