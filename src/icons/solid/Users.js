import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUsers = forwardRef(
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
          d="M5.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 105.5 0zM3.5 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4zM12.5 10H12v5h3v-2.5a2.5 2.5 0 00-2.5-2.5z"
          fill={color}
        />
        <path d="M11.5 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill={color} />
      </svg>
    );
  }
);

SvgUsers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUsers.displayName = "Users";

export default SvgUsers;
