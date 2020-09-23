import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVue = forwardRef(
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
          d="M2.717 1H.5a.5.5 0 00-.432.752l7 12a.5.5 0 00.864 0l7-12A.5.5 0 0014.5 1h-2.217L7.5 8.972 2.717 1z"
          fill={color}
        />
        <path
          d="M11.117 1H8.19L7.5 2.382 6.809 1H3.883L7.5 7.028 11.117 1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgVue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVue.displayName = "Vue";

export default SvgVue;
