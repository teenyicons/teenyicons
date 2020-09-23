import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDirection = forwardRef(
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
          d="M.697.04A.5.5 0 00.04.697l6 14a.5.5 0 00.934-.039l1.921-5.763 5.763-1.92a.5.5 0 00.039-.935l-14-6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDirection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDirection.displayName = "Direction";

export default SvgDirection;
