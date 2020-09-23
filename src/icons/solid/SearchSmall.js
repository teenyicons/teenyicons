import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgSearchSmall = forwardRef(
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
          d="M7 4a3 3 0 101.738 5.445l1.408 1.409.708-.708-1.409-1.408A3 3 0 007 4z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgSearchSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgSearchSmall.displayName = "SearchSmall";

export default SvgSearchSmall;
