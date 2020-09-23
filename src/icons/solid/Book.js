import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBook = forwardRef(
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
          d="M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H3V0H1.5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 15h1v-1h6.5a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0011.5 0H4v15zm7-10H7V4h4v1z"
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
