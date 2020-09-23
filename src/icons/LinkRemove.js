import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLinkRemove = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6M3 4.5H0M4.5 0v3m6 9v3m1.5-4.5h3"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgLinkRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLinkRemove.displayName = "LinkRemove";

export default SvgLinkRemove;
