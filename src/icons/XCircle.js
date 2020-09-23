import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgXCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 4.5l6 6m-6 0l6-6m-3 10a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgXCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgXCircle.displayName = "XCircle";

export default SvgXCircle;
