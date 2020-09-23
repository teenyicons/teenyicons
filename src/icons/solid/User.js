import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUser = forwardRef(
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
          d="M7.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 107.5 0zM5.5 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4z"
          fill={color}
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
