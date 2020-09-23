import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretUpSmall = forwardRef(
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
          d="M7.5 3.793L10.207 6.5l-.707.707-2-2-2 2-.707-.707L7.5 3.793zm0 3L10.207 9.5l-.707.707-2-2-2 2-.707-.707L7.5 6.793z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretUpSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretUpSmall.displayName = "DoubleCaretUpSmall";

export default SvgDoubleCaretUpSmall;
