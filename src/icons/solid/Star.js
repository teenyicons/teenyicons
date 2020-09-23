import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgStar = forwardRef(
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
          d="M7.948.779a.5.5 0 00-.896 0L5.005 4.926l-4.577.665a.5.5 0 00-.277.853l3.312 3.228-.782 4.559a.5.5 0 00.725.527L7.5 12.605l4.094 2.153a.5.5 0 00.725-.527l-.782-4.56 3.312-3.227a.5.5 0 00-.277-.853l-4.577-.665L7.948.78z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgStar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgStar.displayName = "Star";

export default SvgStar;
