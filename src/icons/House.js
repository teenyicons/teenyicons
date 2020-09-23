import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgHouse = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M.5 5.5l-.29-.407-.21.15V5.5h.5zm7-5l.29-.407a.5.5 0 00-.58 0L7.5.5zm7 5h.5v-.257l-.21-.15-.29.407zm-12 3V8H2v.5h.5zm4 0H7V8h-.5v.5zM1 15V5.5H0V15h1zM.79 5.907l7-5-.58-.814-7 5 .58.814zm6.42-5l7 5 .58-.814-7-5-.58.814zM14 5.5V15h1V5.5h-1zM3 15V8.5H2V15h1zm-.5-6h4V8h-4v1zM6 8.5V15h1V8.5H6zM5 12h1.5v-1H5v1zm6-4v4h1V8h-1zm2-6v2.5h1V2h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgHouse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgHouse.displayName = "House";

export default SvgHouse;
