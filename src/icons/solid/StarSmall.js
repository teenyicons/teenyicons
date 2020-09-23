import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStarSmall = forwardRef(
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
          d="M7.953 3.788a.5.5 0 00-.906 0L6.08 5.85l-2.154.33a.5.5 0 00-.283.843l1.574 1.613-.373 2.284a.5.5 0 00.736.518L7.5 10.375l1.921 1.063a.5.5 0 00.736-.519l-.373-2.283 1.574-1.613a.5.5 0 00-.283-.844L8.921 5.85l-.968-2.062z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStarSmall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStarSmall.displayName = "StarSmall";

export default SvgStarSmall;
