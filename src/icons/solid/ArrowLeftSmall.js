import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowLeftSmall = forwardRef(
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
          d="M7.207 5.5L5.707 7H11v1H5.707l1.5 1.5-.707.707L3.793 7.5 6.5 4.793l.707.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowLeftSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowLeftSmall.displayName = "ArrowLeftSmall";

export default SvgArrowLeftSmall;
