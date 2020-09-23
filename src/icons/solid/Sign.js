import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSign = forwardRef(
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
          d="M1 1v2H0v1h1v11h1V4h4v2H4.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5H13V4h2V3H2V1H1zm6 5V4h5v2H7z"
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
