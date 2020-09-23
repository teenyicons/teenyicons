import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNintendoSwitch = forwardRef(
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
        <path d="M3.5 4a.5.5 0 100 1 .5.5 0 000-1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 .5v12a.5.5 0 01-.5.5h-3A3.5 3.5 0 010 9.5v-6A3.5 3.5 0 013.5 0h3a.5.5 0 01.5.5zm-5 4a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
        <path d="M11.5 10a.5.5 0 100 1 .5.5 0 000-1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 5.5v6a3.5 3.5 0 01-3.5 3.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3A3.5 3.5 0 0115 5.5zm-5 5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNintendoSwitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNintendoSwitch.displayName = "NintendoSwitch";

export default SvgNintendoSwitch;
