import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgInfo = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7 1.5V2h1v-.5H7zm1-.01v-.5H7v.5h1zM8 13.5V4H7v9.5h1zm0-12v-.01H7v.01h1zM4 5h3.5V4H4v1zm-2 9h11v-1H2v1z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgInfo.displayName = "Info";

export default SvgInfo;
