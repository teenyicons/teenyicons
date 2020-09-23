import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDoubleCaretDown = forwardRef(
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
          d="M14.707 1.474L7.5 9.234.293 1.475l.733-.68L7.5 7.764 13.974.793l.733.68zm-13.68 4.82L7.5 13.264l6.474-6.972.733.68L7.5 14.736.293 6.974l.733-.68z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDoubleCaretDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDoubleCaretDown.displayName = "DoubleCaretDown";

export default SvgDoubleCaretDown;
