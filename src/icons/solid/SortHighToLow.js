import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortHighToLow = forwardRef(
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
          d="M4 13.293V0h1v13.293l2.146-2.147.708.708-3 3a.5.5 0 01-.708 0l-3-3 .708-.708L4 13.293zM11 1h-1V0h1.5a.5.5 0 01.5.5V6h1v1h-3V6h1V1zm-2 9a2 2 0 012-2h.862a1.68 1.68 0 011.594 2.212l-1.482 4.446-.948-.316.78-2.342H11a2 2 0 01-2-2zm3.14 1l.368-1.104A.68.68 0 0011.862 9H11a1 1 0 100 2h1.14z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSortHighToLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSortHighToLow.displayName = "SortHighToLow";

export default SvgSortHighToLow;
