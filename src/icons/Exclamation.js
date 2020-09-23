import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExclamation = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M8 13.5V13H7v.5h1zm-1 .01v.5h1v-.5H7zM7 1v10h1V1H7zm0 12.5v.01h1v-.01H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExclamation.displayName = "Exclamation";

export default SvgExclamation;
