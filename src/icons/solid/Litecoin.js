import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLitecoin = forwardRef(
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
          d="M3.714 6.584l1.3-5.205.971.242-1.093 4.374 1.884-.942.448.894-2.652 1.326L3.14 13H13v1H1.86l1.534-6.138-2.17 1.085-.448-.894 2.938-1.469z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLitecoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLitecoin.displayName = "Litecoin";

export default SvgLitecoin;
