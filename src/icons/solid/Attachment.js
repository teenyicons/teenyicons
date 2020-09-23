import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgAttachment = forwardRef(
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
          d="M0 4.5V0h1v4.5a1.5 1.5 0 103 0v-3a.5.5 0 00-1 0V5H2V1.5a1.5 1.5 0 113 0v3a2.5 2.5 0 01-5 0z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 0H6v4.5A3.5 3.5 0 012.5 8H1v5.5A1.5 1.5 0 002.5 15h10a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0012.5 0zM11 4H7v1h4V4zm0 3H7v1h4V7zm-7 3h7v1H4v-1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgAttachment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgAttachment.displayName = "Attachment";

export default SvgAttachment;
