import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSortHighToLow = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M11.5.5h.5a.5.5 0 00-.5-.5v.5zm1 11l.474.158-.474-.158zm.482-1.446l-.474-.158.474.158zM4.5 14.5l-.354.354a.5.5 0 00.708 0L4.5 14.5zM10 1h1.5V0H10v1zm1-.5v6h1v-6h-1zM10 7h3V6h-3v1zm1.862 1H11v1h.862V8zm1.112 3.658l.482-1.446-.948-.316-.482 1.446.948.316zM11 12h1.5v-1H11v1zm.974 2.658l1-3-.948-.316-1 3 .948.316zM9 10a2 2 0 002 2v-1a1 1 0 01-1-1H9zm2-2a2 2 0 00-2 2h1a1 1 0 011-1V8zm.862 1a.68.68 0 01.646.896l.948.316A1.68 1.68 0 0011.862 8v1zm-7.008 5.854l3-3-.708-.708-3 3 .708.708zm0-.708l-3-3-.708.708 3 3 .708-.708zM4 0v14.5h1V0H4z"
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
