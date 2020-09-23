import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCSharp = forwardRef(
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
        <path d="M10 8V7h1v1h-1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5.421L14 4.213v6.574L7.5 14.58 1 10.787V4.213L7.5.42zM6.332 4A3.332 3.332 0 003 7.332v.336a3.332 3.332 0 004.821 2.98l.403-.2-.448-.895-.402.2A2.331 2.331 0 014 7.669v-.336a2.332 2.332 0 013.374-2.086l.402.201.448-.894-.403-.201A3.332 3.332 0 006.331 4zM9 5v1H8v1h1v1H8v1h1v1h1V9h1v1h1V9h1V8h-1V7h1V6h-1V5h-1v1h-1V5H9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCSharp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCSharp.displayName = "CSharp";

export default SvgCSharp;
