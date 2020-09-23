import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessage = forwardRef(
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
          d="M1.5 0C.671 0 0 .67 0 1.5v8.993c0 .83.671 1.5 1.5 1.5h3.732l1.852 2.775a.5.5 0 00.832 0l1.851-2.775H13.5c.829 0 1.5-.67 1.5-1.5V1.5C15 .67 14.329 0 13.5 0h-12z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessage.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessage.displayName = "Message";

export default SvgMessage;
