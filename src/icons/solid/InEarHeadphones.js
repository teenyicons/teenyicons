import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInEarHeadphones = forwardRef(
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
          d="M6 1.654C6 .74 5.26 0 4.346 0H3.5A3.5 3.5 0 000 3.5V13h1v2h1v-2h1V7h1a2 2 0 002-2V1.654zM10.654 0C9.74 0 9 .74 9 1.654V5a2 2 0 002 2h1v6h1v2h1v-2h1V3.5A3.5 3.5 0 0011.5 0h-.846z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInEarHeadphones.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInEarHeadphones.displayName = "InEarHeadphones";

export default SvgInEarHeadphones;
