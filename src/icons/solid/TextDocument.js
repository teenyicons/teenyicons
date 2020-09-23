import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTextDocument = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm3 2.497L9 4v1l-5-.003v-1zm7 2.998H4v1h7v-1zm0 3.006l-7-.008v1L11 11v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTextDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTextDocument.displayName = "TextDocument";

export default SvgTextDocument;
