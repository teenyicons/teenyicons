import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgMessenger = forwardRef(
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
          d="M0 7.196C0 3.2 3.379 0 7.5 0S15 3.201 15 7.196c0 3.994-3.379 7.195-7.5 7.195a7.77 7.77 0 01-2.72-.489l-2.242 1.05a.5.5 0 01-.694-.583l.526-1.932C.918 11.129 0 9.269 0 7.196zm8.516 1.441l3.304-2.753-.64-.768-2.696 2.247L6.507 5.88 2.71 8.593l.582.814L6.493 7.12l2.023 1.517z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgMessenger.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgMessenger.displayName = "Messenger";

export default SvgMessenger;
