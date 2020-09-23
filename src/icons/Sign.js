import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSign = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M4.5 6.5V6a.5.5 0 00-.5.5h.5zm10 0h.5a.5.5 0 00-.5-.5v.5zm0 6v.5a.5.5 0 00.5-.5h-.5zm-10 0H4a.5.5 0 00.5.5v-.5zM1 1v14h1V1H1zM0 4h15V3H0v1zm4.5 3h10V6h-10v1zm9.5-.5v6h1v-6h-1zm.5 5.5h-10v1h10v-1zm-9.5.5v-6H4v6h1zm1-9v3h1v-3H6zm6 0v3h1v-3h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSign.displayName = "Sign";

export default SvgSign;
