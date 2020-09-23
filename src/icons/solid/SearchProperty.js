import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearchProperty = forwardRef(
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
        <path d="M5 8V6.207l1.5-1.5 1.5 1.5V8H5z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 6.5a6.5 6.5 0 1111.436 4.23l3.418 3.416-.707.707-3.418-3.417A6.5 6.5 0 010 6.5zm8.854-.854l-2-2a.5.5 0 00-.708 0l-2 2A.5.5 0 004 6v2.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V6a.5.5 0 00-.146-.354z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSearchProperty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSearchProperty.displayName = "SearchProperty";

export default SvgSearchProperty;
