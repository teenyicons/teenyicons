import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgContact = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 12.5v.5h1v-.5H2zm5 0v.5h1v-.5H7zm-4 0V12H2v.5h1zm4-.5v.5h1V12H7zm-2-2a2 2 0 012 2h1a3 3 0 00-3-3v1zm-2 2a2 2 0 012-2V9a3 3 0 00-3 3h1zm2-8a2 2 0 00-2 2h1a1 1 0 011-1V4zm2 2a2 2 0 00-2-2v1a1 1 0 011 1h1zM5 8a2 2 0 002-2H6a1 1 0 01-1 1v1zm0-1a1 1 0 01-1-1H3a2 2 0 002 2V7zM1.5 3h12V2h-12v1zm12.5.5v8h1v-8h-1zm-.5 8.5h-12v1h12v-1zM1 11.5v-8H0v8h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 13v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 3a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 2v1zm-12-1A1.5 1.5 0 000 3.5h1a.5.5 0 01.5-.5V2zM9 6h3V5H9v1zm0 3h3V8H9v1zm-9 6h15v-1H0v1zM3 0v2.5h1V0H3zm8 0v2.5h1V0h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgContact.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgContact.displayName = "Contact";

export default SvgContact;
