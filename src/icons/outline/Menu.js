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
        <path d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15" stroke={color} />
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
