import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHouse = forwardRef(
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
          d="M7.79.093a.5.5 0 00-.58 0l-7 5A.5.5 0 000 5.5v9a.5.5 0 00.5.5H2V8h5v7h7.5a.5.5 0 00.5-.5v-9a.5.5 0 00-.21-.407L14 4.528V2h-1v1.814L7.79.094zM11 12V8h1v4h-1z"
          fill={color}
        />
        <path d="M6 15v-3H5v-1h1V9H3v6h3z" fill={color} />
      </svg>
    );
  }
);

SvgHouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHouse.displayName = "House";

export default SvgHouse;
