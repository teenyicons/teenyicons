import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgImageDocument = forwardRef(
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
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293v6.999l-2.5-2.504-2.959 2.957L4.5 5.7 1 10.075V1.5zM11 6h-1V5h1v1z"
          fill={color}
        />
        <path
          d="M1 11.675V13.5A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5v-1.793l-2.5-2.504-3.041 3.039L4.5 7.3 1 11.675z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgImageDocument.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgImageDocument.displayName = "ImageDocument";

export default SvgImageDocument;
