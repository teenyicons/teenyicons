import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGatsbyjs = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11.07 4a5.002 5.002 0 00-8.342 2L9 12.271A5.004 5.004 0 0012.475 8H9m-6.5.5l4 4m1 2a7 7 0 110-14 7 7 0 010 14z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGatsbyjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGatsbyjs.displayName = "Gatsbyjs";

export default SvgGatsbyjs;
