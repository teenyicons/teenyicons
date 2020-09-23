import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBook = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5.5V0a.5.5 0 00-.5.5h.5zm0 13H1a.5.5 0 00.5.5v-.5zM4 0v15h1V0H4zM1.5 1h10V0h-10v1zM13 2.5v9h1v-9h-1zM11.5 13h-10v1h10v-1zm-9.5.5V.5H1v13h1zm11-2a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM11.5 1A1.5 1.5 0 0113 2.5h1A2.5 2.5 0 0011.5 0v1zM7 5h4V4H7v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBook.displayName = "Book";

export default SvgBook;
