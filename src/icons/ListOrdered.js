import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgListOrdered = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 13.5l-.354-.354A.5.5 0 00.5 14v-.5zm1-11H2V2h-.5v.5zM5 8h10V7H5v1zm0-4h10V3H5v1zm0 8h10v-1H5v1zm-2 1H.5v1H3v-1zm-2.146.854l1.792-1.793-.707-.707-1.793 1.792.708.708zM1.793 10H1.5v1h.293v-1zM1.5 10A1.5 1.5 0 000 11.5h1a.5.5 0 01.5-.5v-1zM3 11.207C3 10.54 2.46 10 1.793 10v1c.114 0 .207.093.207.207h1zm-.354.854c.227-.227.354-.534.354-.854H2a.207.207 0 01-.06.147l.706.707zM0 6h3V5H0v1zm2-.5v-3H1v3h1zM1.5 2H0v1h1.5V2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgListOrdered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgListOrdered.displayName = "ListOrdered";

export default SvgListOrdered;
