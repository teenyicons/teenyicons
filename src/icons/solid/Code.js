import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCode = forwardRef(
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
          d="M6.007 13.418l2-12 .986.164-2 12-.986-.164zm-.8-8.918l-3 3 3 3-.707.707L.793 7.5 4.5 3.793l.707.707zm5.293-.707L14.207 7.5 10.5 11.207l-.707-.707 3-3-3-3 .707-.707z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCode.displayName = "Code";

export default SvgCode;
