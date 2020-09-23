import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgEye = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 17 15"
        fill="none"
        ref={ref}
        {...props}
      >
        <path d="M7 7.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 7.5l.464-.186v-.002l-.002-.004-.006-.014a3.334 3.334 0 00-.1-.222 10.364 10.364 0 00-1.61-2.406C13.062 3.348 11.187 2 8.5 2 5.814 2 3.939 3.348 2.753 4.666a10.368 10.368 0 00-1.61 2.406 6.064 6.064 0 00-.099.222l-.005.014-.002.004v.001s-.001.001.463.187l-.464-.186-.074.186.074.186L1.5 7.5l-.464.186v.002l.003.004.005.014a3.5 3.5 0 00.1.222 10.369 10.369 0 001.61 2.406C3.938 11.652 5.813 13 8.5 13c2.686 0 4.561-1.348 5.747-2.665a10.364 10.364 0 001.61-2.407 6.223 6.223 0 00.099-.222l.006-.014.001-.004v-.001c.001 0 .001-.001-.463-.187l.464.186.075-.186-.075-.186-.464.186zM8.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgEye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgEye.displayName = "Eye";

export default SvgEye;
