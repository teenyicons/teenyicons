import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBorderAll = forwardRef(
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
          d="M1 1h13v13H1V1zm1 1v5h5V2H2zm6 0v5h5V2H8zm5 6H8v5h5V8zm-6 5V8H2v5h5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBorderAll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBorderAll.displayName = "BorderAll";

export default SvgBorderAll;
