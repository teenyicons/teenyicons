import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExpandAlt = forwardRef(
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
          d="M12.293 2H10V1h4v4h-1V2.707L9.854 5.854l-.708-.708L12.293 2zm-6.44 7.854L2.708 13H5v1H1v-4h1v2.293l3.146-3.147.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExpandAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExpandAlt.displayName = "ExpandAlt";

export default SvgExpandAlt;
