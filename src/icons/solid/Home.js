import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHome = forwardRef(
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
          d="M7.825.12a.5.5 0 00-.65 0L0 6.27v7.23A1.5 1.5 0 001.5 15h4a.5.5 0 00.5-.5v-3a1.5 1.5 0 013 0v3a.5.5 0 00.5.5h4a1.5 1.5 0 001.5-1.5V6.27L7.825.12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHome.displayName = "Home";

export default SvgHome;
