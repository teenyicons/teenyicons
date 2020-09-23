import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCart = forwardRef(
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
          d="M.979.356L.02.644 3.128 11H15V4.5A2.5 2.5 0 0012.5 2H1.472L.979.356z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5 13.5a.5.5 0 111 0 .5.5 0 01-1 0zM12.5 12a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-.5 1.5a.5.5 0 111 0 .5.5 0 01-1 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCart.displayName = "Cart";

export default SvgCart;
