import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRollupjs = forwardRef(
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
          d="M1 .5a.5.5 0 01.5-.5H9c.782 0 1.523.18 2.182.5h-.135a3.838 3.838 0 00-4.134 2.057L1.325 13.733A2.489 2.489 0 011 12.5V.5z"
          fill={color}
        />
        <path
          d="M4.87 15h8.63a.5.5 0 00.455-.707l-2.298-5.057A4.997 4.997 0 0014 5a4.984 4.984 0 00-1.43-3.5h-2.128a1.26 1.26 0 00-1.195 1.659l.457 1.371c.11.332.39.579.733.648a.485.485 0 00.178.002l.009-.01.007.007a.484.484 0 00.359-.626l-.464-1.393.948-.316.465 1.393a1.483 1.483 0 01-.736 1.793 55.058 55.058 0 00-5.95 8.315L4.872 15z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRollupjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRollupjs.displayName = "Rollupjs";

export default SvgRollupjs;
