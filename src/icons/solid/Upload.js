import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgUpload = forwardRef(
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
          d="M7.486.807l3.603 3.326-.678.734L8 2.642V11H7V2.707L4.854 4.854l-.708-.708 3.34-3.34zM2 13V7H1v7h13V7h-1v6H2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgUpload.displayName = "Upload";

export default SvgUpload;
