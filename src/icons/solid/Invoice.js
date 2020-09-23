import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInvoice = forwardRef(
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
          d="M10 7.995V9H8V7.995h2zM10 6v.995H8V6h2zM7 6H5v.995h2V6zM7 7.995H5V9h2V7.995z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 1.5A1.5 1.5 0 012.5 0h8.207L14 3.293V13.5a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 13.5v-12zM4 4h3V3H4v1zm7 1H4v5h7V5zm0 7H8v-1h3v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInvoice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInvoice.displayName = "Invoice";

export default SvgInvoice;
