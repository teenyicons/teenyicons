import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgPaw = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M6.5 3V2a1.5 1.5 0 10-3 0v1a1.5 1.5 0 103 0zM11.5 3V2a1.5 1.5 0 00-3 0v1a1.5 1.5 0 103 0zM14.5 7.5V7a1.5 1.5 0 00-3 0v.5a1.5 1.5 0 003 0zM3.5 7.5V7a1.5 1.5 0 10-3 0v.5a1.5 1.5 0 103 0zM2.855 11.64l2.918-3.543a2.237 2.237 0 013.454 0l2.918 3.543c.939 1.14.128 2.86-1.35 2.86-.194 0-.385-.045-.559-.132l-.36-.18a5.315 5.315 0 00-4.753 0l-.36.18a1.248 1.248 0 01-.558.132c-1.478 0-2.289-1.72-1.35-2.86z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgPaw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgPaw.displayName = "Paw";

export default SvgPaw;
