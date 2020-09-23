import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAttach = forwardRef(
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
          d="M7.318.975a3.328 3.328 0 114.707 4.707l-5.757 5.757A1.914 1.914 0 113.56 8.732l5.585-5.586.708.708-5.586 5.585a.914.914 0 101.293 1.293l5.757-5.757a2.328 2.328 0 10-3.293-3.293L2.096 7.611a3.743 3.743 0 005.293 5.293l5.757-5.758.708.708-5.758 5.757A4.743 4.743 0 011.39 6.904L7.318.974z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAttach.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAttach.displayName = "Attach";

export default SvgAttach;
