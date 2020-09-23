import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessagePlus = forwardRef(
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
          d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.993c0 .83-.671 1.5-1.5 1.5H9.768l-1.852 2.775a.5.5 0 01-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5V1.5zM7 9V7H5V6h2V4h1v2h2v1H8v2H7z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessagePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessagePlus.displayName = "MessagePlus";

export default SvgMessagePlus;
