import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTickSmall = forwardRef(
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
          d="M11.39 5.312l-4.318 5.399L3.68 7.884l.64-.768 2.608 2.173 3.682-4.601.78.624z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTickSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTickSmall.displayName = "TickSmall";

export default SvgTickSmall;
