import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLitecoin = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path d="M5.5 1.5l-3 12H13m-12-5l6-3" stroke={color} />
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
