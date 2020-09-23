import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGlobeAmericas = forwardRef(
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
          d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM1.197 5.904A6.503 6.503 0 006 13.826v-.619l-1-1v-1.5l-1-1V8.5a.5.5 0 01.5-.5h4A1.5 1.5 0 0110 9.5v.512c.51.073.915.477.988.988h1.99A6.502 6.502 0 0010 1.498V2.5A1.5 1.5 0 018.5 4h-1a.5.5 0 00-.5.5A1.5 1.5 0 015.5 6H5v.707l-.44.44a1.5 1.5 0 01-2.12 0L1.196 5.903z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGlobeAmericas.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGlobeAmericas.displayName = "GlobeAmericas";

export default SvgGlobeAmericas;
