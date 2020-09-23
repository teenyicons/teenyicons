import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSkype = forwardRef(
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
          d="M0 4.457A4.456 4.456 0 016.778.652C7.01.626 7.25.61 7.5.61A6.892 6.892 0 0114.391 7.5c0 .248-.017.49-.043.723a4.457 4.457 0 01-6.126 6.125 6.477 6.477 0 01-.722.043A6.891 6.891 0 01.609 7.5c0-.248.017-.49.043-.723A4.435 4.435 0 010 4.457zM6 6a1 1 0 011-1h.882c.496 0 .949.28 1.17.724l.895-.448A2.309 2.309 0 007.882 4H7a2 2 0 100 4h1a1 1 0 010 2h-.882c-.496 0-.95-.28-1.17-.724l-.895.448A2.309 2.309 0 007.118 11H8a2 2 0 100-4H7a1 1 0 01-1-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSkype.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSkype.displayName = "Skype";

export default SvgSkype;
