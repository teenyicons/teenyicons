import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaypal = forwardRef(
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
          d="M3.015.379A.5.5 0 013.5 0h4.661c2.397 0 4.191 1.957 4.204 4.172 1.928.626 3.021 2.851 2.104 4.837a4.287 4.287 0 01-3.892 2.491h-1.2l-.896 3.137A.5.5 0 018 15H4a.5.5 0 01-.485-.621L3.86 13H.5a.5.5 0 01-.485-.621l3-12zM8.16 1c1.762 0 3.097 1.388 3.197 3.001L11.264 4H6.5a.5.5 0 00-.485.379L4.11 12H1.14L3.89 1h4.271zm-.866 8H5.89l-1.25 5h2.983l.896-3.137A.5.5 0 019 10.5h1.577a3.287 3.287 0 002.985-1.91c.626-1.357-.057-2.87-1.32-3.396-.039.16-.089.32-.149.48A5.125 5.125 0 017.296 9z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgPaypal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaypal.displayName = "Paypal";

export default SvgPaypal;
