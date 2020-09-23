import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgNodejs = forwardRef(
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
          d="M14 4.213L7.5.42 1 4.213v6.574l1.006.587 2.057-.832A1.5 1.5 0 005 9.152V4h1v5.152a2.5 2.5 0 01-1.562 2.317l-1.34.542L7.5 14.58l6.5-3.792V4.213zM7 6a2 2 0 012-2h1.167C11.179 4 12 4.82 12 5.833V6h-1v-.167A.833.833 0 0010.167 5H9a1 1 0 000 2h1a2 2 0 110 4H9a2 2 0 01-2-2h1a1 1 0 001 1h1a1 1 0 100-2H9a2 2 0 01-2-2z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgNodejs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgNodejs.displayName = "Nodejs";

export default SvgNodejs;
