import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSignin = forwardRef(
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
          d="M7 1h7v13H7v-1h6V2H7V1zm.854 3.146l3.34 3.34-3.327 3.603-.734-.678L9.358 8H1V7h8.293L7.146 4.854l.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSignin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSignin.displayName = "Signin";

export default SvgSignin;
