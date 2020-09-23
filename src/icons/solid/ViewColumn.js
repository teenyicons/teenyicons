import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgViewColumn = forwardRef(
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
          d="M1 15V0h1v15H1zm4 0V0h1v15H5zm4 0V0h1v15H9zm4 0V0h1v15h-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgViewColumn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgViewColumn.displayName = "ViewColumn";

export default SvgViewColumn;
