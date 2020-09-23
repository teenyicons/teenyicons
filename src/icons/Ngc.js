import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNgc = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M3 3.5a11.08 11.08 0 019 0M.5 6.5v5.764a1.236 1.236 0 002.342.553L3.5 11.5m11-5v5.764a1.236 1.236 0 01-2.342.553L11.5 11.5M6 7.5h3m-5.7 3.499L1.148 8.31A2.961 2.961 0 01.5 6.461v-.396a2.565 2.565 0 015.032-.705l1.117 3.91a1.922 1.922 0 01-3.35 1.729zm8.4 0l2.151-2.688c.42-.525.649-1.177.649-1.85v-.396a2.565 2.565 0 00-5.032-.705L8.351 9.27a1.922 1.922 0 003.35 1.729z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgNgc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNgc.displayName = "Ngc";

export default SvgNgc;
