import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAlien = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.52 11.435c.24.107.719.497.981.497.263 0 .741-.39.982-.497m-3.926-4.97l1.472 1.49m4.417-1.49l-1.472 1.49M7.5.5c-3.56 0-5.533 1.95-5.888 4.474-.358 2.33.136 4.53 1.472 6.461.643.953 1.486 1.876 2.454 2.486 1.271.772 2.654.772 3.925 0 .967-.61 1.81-1.533 2.454-2.486 1.33-1.934 1.824-4.13 1.472-6.461C13.034 2.449 11.062.5 7.501.5z"
          stroke={color}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SvgAlien.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAlien.displayName = "Alien";

export default SvgAlien;
