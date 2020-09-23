import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgLogout = forwardRef(
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
          d="M1 1h7v1H2v11h6v1H1V1zm9.854 3.146l3.34 3.34-3.327 3.603-.734-.678L12.358 8H4V7h8.293l-2.147-2.146.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgLogout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgLogout.displayName = "Logout";

export default SvgLogout;
