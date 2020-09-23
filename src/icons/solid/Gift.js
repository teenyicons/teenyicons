import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGift = forwardRef(
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
          d="M4.5 0A2.5 2.5 0 002 2.5v.286c0 .448.133.865.362 1.214H1.5A1.5 1.5 0 000 5.5v1A1.5 1.5 0 001.5 8H7V4h1v4h5.5A1.5 1.5 0 0015 6.5v-1A1.5 1.5 0 0013.5 4h-.862c.229-.349.362-.766.362-1.214V2.5A2.5 2.5 0 0010.5 0c-1.273 0-2.388.68-3 1.696A3.498 3.498 0 004.5 0zM8 4h2.786C11.456 4 12 3.456 12 2.786V2.5A1.5 1.5 0 0010.5 1 2.5 2.5 0 008 3.5V4zM7 4H4.214C3.544 4 3 3.456 3 2.786V2.5A1.5 1.5 0 014.5 1 2.5 2.5 0 017 3.5V4z"
          fill={color}
        />
        <path
          d="M7 9H1v3.5A2.5 2.5 0 003.5 15H7V9zM8 15h3.5a2.5 2.5 0 002.5-2.5V9H8v6z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgGift.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGift.displayName = "Gift";

export default SvgGift;
