import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPhonecall = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5.5l-6 6m6-6V4m0-3.5H11M2.5.5h2.22a1 1 0 01.97.757l.585 2.345a1 1 0 01-.654 1.19l-1.108.37a1.21 1.21 0 00-.804 1.385 6.047 6.047 0 004.744 4.744 1.21 1.21 0 001.385-.804l.297-.893a1 1 0 011.396-.578l2.416 1.208a1 1 0 01.553.894V12.5a2 2 0 01-2 2h-2c-5.523 0-10-4.477-10-10v-2a2 2 0 012-2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPhonecall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPhonecall.displayName = "Phonecall";

export default SvgPhonecall;
