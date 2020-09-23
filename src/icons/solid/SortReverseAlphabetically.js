import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortReverseAlphabetically = forwardRef(
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
          d="M3.146.146a.5.5 0 01.708 0l3 3-.708.708L4 1.707V15H3V1.707L.854 3.854l-.708-.708 3-3zM11.5 1A1.5 1.5 0 0010 2.5V4h3V2.5A1.5 1.5 0 0011.5 1zM13 5v2h1V2.5a2.5 2.5 0 00-5 0V7h1V5h3zM9 8h3a2 2 0 011.323 3.5A2 2 0 0112 15H9V8zm3 3a1 1 0 100-2h-2v2h2zm-2 1h2a1 1 0 110 2h-2v-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSortReverseAlphabetically.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSortReverseAlphabetically.displayName = "SortReverseAlphabetically";

export default SvgSortReverseAlphabetically;
