import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPool = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1 12.6c.65.733 1.655 1.4 2.955 1.4 2.954 0 3.545-2 6.5-2 1.359 0 2.6.733 3.545 1.467M2.5 12V3.727C2.5 1.945 3.855.5 5.636.5M9.5 10V3.636C9.5 1.855 10.9.5 12.682.5M2.5 4.5h7m-7 4h7"
          stroke={color}
          strokeMiterlimit={10}
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgPool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPool.displayName = "Pool";

export default SvgPool;
