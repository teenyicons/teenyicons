import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortLowToHigh = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11.5.5h.5a.5.5 0 00-.5-.5v.5zm-7 0l.354-.354a.5.5 0 00-.708 0L4.5.5zM10 1h1.5V0H10v1zm1-.5v6h1v-6h-1zM10 7h3V6h-3v1zm1.578 1H11v1h.578V8zm1.396 3.658l.393-1.176-.95-.317-.391 1.177.948.316zM11 12h1.5v-1H11v1zm.974 2.658l1-3-.948-.316-1 3 .948.316zM9 10a2 2 0 002 2v-1a1 1 0 01-1-1H9zm2-2a2 2 0 00-2 2h1a1 1 0 011-1V8zm.578 1a.885.885 0 01.84 1.165l.949.317A1.885 1.885 0 0011.578 8v1zM4.146.146l-3 3 .708.708 3-3-.708-.708zm0 .708l3 3 .708-.708-3-3-.708.708zM4 .5V15h1V.5H4z"
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
