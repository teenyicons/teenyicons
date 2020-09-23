import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgArrowRightSmall = forwardRef(
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
          d="M8.5 4.793L11.207 7.5 8.5 10.207 7.793 9.5l1.5-1.5H4V7h5.293l-1.5-1.5.707-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgArrowRightSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgArrowRightSmall.displayName = "ArrowRightSmall";

export default SvgArrowRightSmall;
