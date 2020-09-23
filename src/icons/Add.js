import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAdd = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M7.5 1v13M1 7.5h13" stroke={color} />
      </svg>
    );
  }
);

SvgAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAdd.displayName = "Add";

export default SvgAdd;
