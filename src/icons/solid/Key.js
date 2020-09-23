import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgKey = forwardRef(
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
          d="M7 4a4 4 0 111.547 3.16l-3.34 3.34 1.647 1.646-.708.708L4.5 11.207 3.207 12.5l1.647 1.646-.708.708L2.5 13.207.854 14.854l-.708-.708L7.84 6.453A3.983 3.983 0 017 4zm4-3a3 3 0 100 6 3 3 0 000-6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgKey.displayName = "Key";

export default SvgKey;
