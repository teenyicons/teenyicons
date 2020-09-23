import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgExpand = forwardRef(
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
          d="M1 1h4v1H2.707l3.147 3.146-.708.708L2 2.707V5H1V1zm11.293 1H10V1h4v4h-1V2.707L9.854 5.854l-.708-.708L12.293 2zm-6.44 7.854L2.708 13H5v1H1v-4h1v2.293l3.146-3.147.708.708zm4-.708L13 12.293V10h1v4h-4v-1h2.293L9.146 9.854l.708-.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgExpand.displayName = "Expand";

export default SvgExpand;
