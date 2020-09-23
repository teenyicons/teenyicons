import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Svg360 = forwardRef(
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
          d="M7 8.5V8h.5a.5.5 0 11-.5.5zM11.5 6a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 7.5a7.5 7.5 0 0112.787-5.32 1.5 1.5 0 011.659 2.484C14.802 5.54 15 6.498 15 7.5a7.5 7.5 0 01-15 0zM13.5 3a.5.5 0 100 1 .5.5 0 000-1zM2 6h1.5l-.9 1.2A.5.5 0 003 8h.5a.5.5 0 010 1H2v1h1.5a1.5 1.5 0 00.449-2.932L4.9 5.8a.5.5 0 00-.4-.8H2v1zm5.5-1A1.5 1.5 0 006 6.5v2A1.5 1.5 0 107.5 7H7v-.5a.5.5 0 01.5-.5H8V5h-.5zM10 6.5a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0v-2z"
          fill={color}
        />
      </svg>
    );
  }
);

Svg360.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Svg360.displayName = "360";

export default Svg360;
