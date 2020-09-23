import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgListUnordered = forwardRef(
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
          d="M2 4H0V3h2v1zm13 0H4V3h11v1zM2 8H0V7h2v1zm13 0H4V7h11v1zM2 12H0v-1h2v1zm13 0H4v-1h11v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgListUnordered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgListUnordered.displayName = "ListUnordered";

export default SvgListUnordered;
