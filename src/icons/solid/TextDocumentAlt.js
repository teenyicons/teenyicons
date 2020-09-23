import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgTextDocumentAlt = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zm3 2.497h7v1H4v-1zm7 2.998H4v1h7v-1zM11 10H4v1h7v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgTextDocumentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgTextDocumentAlt.displayName = "TextDocumentAlt";

export default SvgTextDocumentAlt;
