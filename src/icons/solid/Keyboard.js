import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgKeyboard = forwardRef(
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
          d="M8 0v4h5.5A1.5 1.5 0 0115 5.5v7a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 12.5v-7A1.5 1.5 0 011.5 4H7V0h1zm2 6h1v1h-1V6zm1 2h-1v1h1V8zm0 3H4v1h7v-1zM7 8h1v1H7V8zM5 8H4v1h1V8zm3-2H7v1h1V6zM4 6h1v1H4V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgKeyboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgKeyboard.displayName = "Keyboard";

export default SvgKeyboard;
