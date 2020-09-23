import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBagAlt = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h10A1.5 1.5 0 0114 1.5v12a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm9 3a2.5 2.5 0 01-5 0V2H4v2.5a3.5 3.5 0 107 0V2h-1v2.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBagAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBagAlt.displayName = "BagAlt";

export default SvgBagAlt;
