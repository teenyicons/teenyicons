import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPhone = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.72.5H2.5a2 2 0 00-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 002-2v-1.382a1 1 0 00-.553-.894l-2.416-1.208a1 1 0 00-1.396.578l-.297.893a1.21 1.21 0 01-1.385.804A6.047 6.047 0 013.71 6.547a1.21 1.21 0 01.804-1.385l1.108-.37a1 1 0 00.654-1.19L5.69 1.257A1 1 0 004.72.5z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPhone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPhone.displayName = "Phone";

export default SvgPhone;
