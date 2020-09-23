import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSvelte = forwardRef(
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
          d="M13.283 1.944a4.001 4.001 0 01-.27 4.622 4 4 0 01-1.503 5.09l-4.24 2.65A4 4 0 012.028 8.41a4 4 0 011.503-5.09L7.77.671a4 4 0 015.512 1.273zM8.3 1.52a3 3 0 014.13 4.143 3.993 3.993 0 00-2.386-1.345l.724-.453-.53-.848-5.088 3.18.53.847L7.8 5.72a3 3 0 113.18 5.088l-4.24 2.65a3 3 0 01-4.13-4.143 3.993 3.993 0 002.386 1.345l-.725.452.53.848L9.89 8.78l-.53-.847-2.12 1.325a3 3 0 01-3.18-5.089L8.3 1.52z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSvelte.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSvelte.displayName = "elte";

export default SvgSvelte;
