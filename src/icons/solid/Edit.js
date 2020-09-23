import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEdit = forwardRef(
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
          d="M10.854.146a.5.5 0 00-.708 0L0 10.293V14.5a.5.5 0 00.5.5h4.207L14.854 4.854a.5.5 0 000-.708l-4-4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEdit.displayName = "Edit";

export default SvgEdit;
