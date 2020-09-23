import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMenu = forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 2H0V1h15v1zm0 4H0V5h15v1zm0 4H0V9h15v1zm0 4H0v-1h15v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMenu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMenu.displayName = "Menu";

export default SvgMenu;
