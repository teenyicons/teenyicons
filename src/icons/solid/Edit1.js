import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEdit1 = forwardRef(
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
          d="M9.854.146a.5.5 0 00-.708 0L6.5 2.793 12.207 8.5l2.647-2.646a.5.5 0 000-.708l-5-5zM0 9.293L5.793 3.5 11.5 9.207 5.707 15H.5a.5.5 0 01-.5-.5V9.293zM8 15h7v-1H8v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEdit1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEdit1.displayName = "Edit1";

export default SvgEdit1;
