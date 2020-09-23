import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgBath = forwardRef(
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
          d="M2 3.5A2.5 2.5 0 014.5 1H6v1h1V0H4.5A3.5 3.5 0 001 3.5V7H0v1h1v1.5a3.5 3.5 0 003 3.465V15h1v-2h5v2h1v-2.035A3.501 3.501 0 0014 9.5V8h1V7H2V3.5z"
          fill={color}
        />
        <path d="M8 4H5V3h3v1z" fill={color} />
      </svg>
    );
  }
);

SvgBath.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgBath.displayName = "Bath";

export default SvgBath;
