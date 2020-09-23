import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStarCircle = forwardRef(
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
          d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.5-4a.5.5 0 01.453.288L8.92 5.85l2.155.33a.5.5 0 01.282.843L9.784 8.636l.373 2.284a.5.5 0 01-.736.518L7.5 10.375l-1.921 1.063a.5.5 0 01-.736-.519l.373-2.283-1.574-1.613a.5.5 0 01.283-.844l2.154-.329.968-2.062A.5.5 0 017.5 3.5z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStarCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStarCircle.displayName = "StarCircle";

export default SvgStarCircle;
