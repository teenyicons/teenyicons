import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPageNumber = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM10.5 9A1.5 1.5 0 009 10.5h1a.5.5 0 01.5-.5h.293a.207.207 0 01.146.354l-1.793 1.792A.5.5 0 009.5 13H12v-1h-1.293l.94-.94A1.207 1.207 0 0010.793 9H10.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPageNumber.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPageNumber.displayName = "PageNumber";

export default SvgPageNumber;
