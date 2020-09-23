import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoney = forwardRef(
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
        <path d="M6 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.5A1.5 1.5 0 011.5 2h12A1.5 1.5 0 0115 3.5v8a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 11.5v-8zM4 4H2v2h1V5h1V4zm8 1h-1V4h2v2h-1V5zM7.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.5 5v1h2V9h-1v1h-1zM2 9h1v1h1v1H2V9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMoney.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoney.displayName = "Money";

export default SvgMoney;
