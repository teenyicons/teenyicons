import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBold = forwardRef(
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
          d="M3 1.58c0-.32.26-.58.58-.58H8.5a3.5 3.5 0 012.21 6.215A3.501 3.501 0 019.5 14H3.59a.59.59 0 01-.59-.59V1.58zM4 8v5h5.5a2.5 2.5 0 000-5H4zm0-1h4.5a2.5 2.5 0 000-5H4v5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgBold.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBold.displayName = "Bold";

export default SvgBold;
