import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGraphql = forwardRef(
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
          d="M6.015 1.287a1.5 1.5 0 012.97 0l3.545 2.069A1.5 1.5 0 1114 5.916v3.17a1.5 1.5 0 11-1.47 2.559l-3.545 2.068a1.5 1.5 0 01-2.97 0L2.47 11.645A1.5 1.5 0 111 9.085v-3.17a1.5 1.5 0 111.47-2.56l3.545-2.068zm.225 1.027L2.974 4.219A1.5 1.5 0 012 5.914V8.85l4.3-6.45a1.5 1.5 0 01-.06-.085zm.891.64l-4.43 6.647c.09.12.163.254.214.399h9.17c.051-.145.124-.279.214-.4L7.87 2.955a1.503 1.503 0 01-.738 0zm1.57-.555L13 8.85V5.915a1.5 1.5 0 01-.974-1.696L8.76 2.314a1.5 1.5 0 01-.06.085zM11.65 11H3.349l2.89 1.686a1.499 1.499 0 012.521 0L11.65 11zM7.5 1a.5.5 0 100 1 .5.5 0 000-1zm-6 3a.5.5 0 100 1 .5.5 0 000-1zm12 0a.5.5 0 100 1 .5.5 0 000-1zm-12 6a.5.5 0 100 1 .5.5 0 000-1zm12 0a.5.5 0 100 1 .5.5 0 000-1zm-6 3a.5.5 0 100 1 .5.5 0 000-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGraphql.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGraphql.displayName = "Graphql";

export default SvgGraphql;
