import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMoneyStack = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M0 12.5h15m-15 2h15M2.5 4V2.5H4m7 0h1.5V4m-10 3v1.5H4m7 0h1.5V7m-5 .5a2 2 0 110-4 2 2 0 010 4zm-6-7h12a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1v-8a1 1 0 011-1z"
          stroke={color}
        />
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
