import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgContact = forwardRef(
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
          d="M11 2H4V0H3v2H1.5A1.5 1.5 0 000 3.5v8A1.5 1.5 0 001.5 13h12a1.5 1.5 0 001.5-1.5v-8A1.5 1.5 0 0013.5 2H12V0h-1v2zM3 6a2 2 0 114 0 2 2 0 01-4 0zm-.618 4.618a2.927 2.927 0 015.236 0l.33.658A.5.5 0 017.5 12h-5a.5.5 0 01-.447-.724l.329-.658zM9 6h3V5H9v1zm0 3h3V8H9v1z"
          fill={color}
        />
        <path d="M15 14v1H0v-1h15z" fill={color} />
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
