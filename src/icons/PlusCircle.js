import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPlusCircle = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 4v7M4 7.5h7m-3.5 7a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPlusCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPlusCircle.displayName = "PlusCircle";

export default SvgPlusCircle;
