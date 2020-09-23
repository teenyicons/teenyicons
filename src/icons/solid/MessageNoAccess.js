import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessageNoAccess = forwardRef(
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
          d="M7.5 4a2.5 2.5 0 00-2.086 3.879L8.88 4.414A2.488 2.488 0 007.5 4zM7.5 9c-.51 0-.983-.152-1.379-.414L9.586 5.12A2.5 2.5 0 017.5 9z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5C0 .67.671 0 1.5 0h12c.829 0 1.5.67 1.5 1.5v8.993c0 .83-.671 1.5-1.5 1.5H9.768l-1.852 2.775a.5.5 0 01-.832 0l-1.851-2.775H1.5c-.829 0-1.5-.67-1.5-1.5V1.5zm4 5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessageNoAccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessageNoAccess.displayName = "MessageNoAccess";

export default SvgMessageNoAccess;
