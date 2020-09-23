import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoneyStack = forwardRef(
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
        <path d="M6 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 0A1.5 1.5 0 000 1.5v8A1.5 1.5 0 001.5 11h12A1.5 1.5 0 0015 9.5v-8A1.5 1.5 0 0013.5 0h-12zM4 2H2v2h1V3h1V2zm3.5 1a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 3h-1V2h2v2h-1V3zM3 7H2v2h2V8H3V7zm8 2V8h1V7h1v2h-2z"
          fill={color}
        />
        <path d="M0 12v1h15v-1H0zM0 14v1h15v-1H0z" fill={color} />
      </svg>
    );
  }
);

SvgMoneyStack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMoneyStack.displayName = "MoneyStack";

export default SvgMoneyStack;
