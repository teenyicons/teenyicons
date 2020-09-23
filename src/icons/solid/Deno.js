import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDeno = forwardRef(
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
        <path d="M7 7H6V6h1v1z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM8 13.981a6.462 6.462 0 002.971-.985l-.287-5.167A2.995 2.995 0 007.694 5H6a2 2 0 00-1.732 1H5v1H4a2 2 0 002 2h.882c.496 0 .95-.28 1.17-.724l.895.448A2.308 2.308 0 018 9.71v4.27z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDeno.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDeno.displayName = "Deno";

export default SvgDeno;
