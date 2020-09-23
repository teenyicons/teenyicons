import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAddressBook = forwardRef(
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
          d="M3.5 0A1.5 1.5 0 002 1.5V4H1v1h1v5H1v1h1v2.5A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0012.5 0h-9zM6 5a2 2 0 114 0 2 2 0 01-4 0zm-1 6a3 3 0 116 0v1H5v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAddressBook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAddressBook.displayName = "AddressBook";

export default SvgAddressBook;
