import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowLeftCircle = forwardRef(
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
          d="M15 7.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-8.5 2.707L3.793 7.5 6.5 4.793l.707.707-1.5 1.5H11v1H5.707l1.5 1.5-.707.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowLeftCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowLeftCircle.displayName = "ArrowLeftCircle";

export default SvgArrowLeftCircle;
