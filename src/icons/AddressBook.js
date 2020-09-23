import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAddressBook = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M5.5 11.5H5v.5h.5v-.5zm5 0v.5h.5v-.5h-.5zm-4.5 0V11H5v.5h1zm4-.5v.5h1V11h-1zm.5 0h-5v1h5v-1zM8 9a2 2 0 012 2h1a3 3 0 00-3-3v1zm-2 2a2 2 0 012-2V8a3 3 0 00-3 3h1zm2-8a2 2 0 00-2 2h1a1 1 0 011-1V3zm2 2a2 2 0 00-2-2v1a1 1 0 011 1h1zM8 7a2 2 0 002-2H9a1 1 0 01-1 1v1zm0-1a1 1 0 01-1-1H6a2 2 0 002 2V6zM3.5 1h9V0h-9v1zm9.5.5v12h1v-12h-1zM12.5 14h-9v1h9v-1zM3 13.5v-12H2v12h1zm.5.5a.5.5 0 01-.5-.5H2A1.5 1.5 0 003.5 15v-1zm9.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM12.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0012.5 0v1zm-9-1A1.5 1.5 0 002 1.5h1a.5.5 0 01.5-.5V0zM4 4H1v1h3V4zm0 6H1v1h3v-1z"
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
