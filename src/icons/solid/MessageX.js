import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessageX = forwardRef(
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
          d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.993c0 .83-.671 1.5-1.5 1.5H9.768l-1.852 2.775a.5.5 0 01-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5V1.5zm9.146 7.354L7.5 7.207 5.854 8.854l-.708-.708L6.793 6.5 5.146 4.854l.708-.708L7.5 5.793l1.646-1.647.708.708L8.207 6.5l1.647 1.646-.708.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessageX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessageX.displayName = "MessageX";

export default SvgMessageX;
