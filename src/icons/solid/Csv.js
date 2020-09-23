import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgCsv = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM2 6h3v1H3v3h2v1H2V6zm7 0H6v3h2v1H6v1h3V8H7V7h2V6zm2 0h-1v3.707l1.5 1.5 1.5-1.5V6h-1v3.293l-.5.5-.5-.5V6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgCsv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgCsv.displayName = "Csv";

export default SvgCsv;
