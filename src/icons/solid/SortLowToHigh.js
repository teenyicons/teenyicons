import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortLowToHigh = forwardRef(
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
          d="M4.146.146a.5.5 0 01.708 0l3 3-.708.708L5 1.707V15H4V1.707L1.854 3.854l-.708-.708 3-3zM11 1h-1V0h1.5a.5.5 0 01.5.5V6h1v1h-3V6h1V1zm-2 9a2 2 0 012-2h.578a1.885 1.885 0 011.789 2.482l-1.393 4.176-.948-.316.78-2.342H11a2 2 0 01-2-2zm3.14 1l.278-.835A.885.885 0 0011.578 9H11a1 1 0 100 2h1.14z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSortLowToHigh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSortLowToHigh.displayName = "SortLowToHigh";

export default SvgSortLowToHigh;
