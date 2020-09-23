import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMongodb = forwardRef(
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
          d="M7.869.162a.5.5 0 00-.738 0l-2.63 2.87a5.5 5.5 0 00-.271 7.115L7 13.673V15h1v-1.327l2.77-3.526a5.5 5.5 0 00-.27-7.114L7.869.163zM8 3a.5.5 0 00-1 0v7.5a.5.5 0 001 0V3z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMongodb.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMongodb.displayName = "Mongodb";

export default SvgMongodb;
