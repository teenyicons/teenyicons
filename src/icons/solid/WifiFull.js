import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgWifiFull = forwardRef(
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
          d="M7.5 2.985c-2.458 0-4.84 1.183-6.614 3.333l-.772-.636C2.054 3.33 4.707 1.985 7.5 1.985s5.446 1.346 7.386 3.697l-.772.636C12.341 4.168 9.958 2.985 7.5 2.985z"
          fill={color}
        />
        <path
          d="M7.5 7.157c-1.583 0-3.126.762-4.28 2.161l-.772-.636C3.768 7.08 5.583 6.157 7.5 6.157c1.918 0 3.732.924 5.053 2.525l-.772.636c-1.155-1.4-2.698-2.161-4.28-2.161zM6 11.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgWifiFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgWifiFull.displayName = "WifiFull";

export default SvgWifiFull;
