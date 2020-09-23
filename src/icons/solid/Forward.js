import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgForward = forwardRef(
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
          d="M.79 2.093A.5.5 0 000 2.5v10a.5.5 0 00.79.407L7 8.472V12.5a.5.5 0 00.79.407l7-5a.5.5 0 000-.814l-7-5A.5.5 0 007 2.5v4.028L.79 2.093z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgForward.displayName = "Forward";

export default SvgForward;
