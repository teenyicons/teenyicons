import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUser = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          clipRule="evenodd"
          d="M10.5 3.498a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998zM12.5 14.49h-10v-1.996a3 3 0 013-3h4a3 3 0 013 3v1.997z"
          stroke={color}
          strokeLinecap="square"
        />
      </svg>
    );
  }
);

SvgUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUser.displayName = "User";

export default SvgUser;
