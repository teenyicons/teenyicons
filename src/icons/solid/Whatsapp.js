import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWhatsapp = forwardRef(
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
          d="M5 4.768a.5.5 0 01.761.34l.14.836a.5.5 0 01-.216.499l-.501.334A4.501 4.501 0 015 5.5v-.732zM9.5 10a4.5 4.5 0 01-1.277-.184l.334-.5a.5.5 0 01.499-.217l.836.14a.5.5 0 01.34.761H9.5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 113.253 6.182l-2.53 1.265a.5.5 0 01-.67-.67l1.265-2.53A7.467 7.467 0 010 7.5zm4.23-3.42l.206-.138a1.5 1.5 0 012.311 1.001l.14.837a1.5 1.5 0 01-.648 1.495l-.658.438A4.522 4.522 0 007.286 9.42l.44-.658a1.5 1.5 0 011.494-.648l.837.14a1.5 1.5 0 011.001 2.311l-.138.207a.5.5 0 01-.42.229h-1A5.5 5.5 0 014 5.5v-1a.5.5 0 01.23-.42z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWhatsapp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWhatsapp.displayName = "Whatsapp";

export default SvgWhatsapp;
