import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDiamond = forwardRef(
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
          d="M11.783 0H3.217L.07 5.243a.5.5 0 00.034.564l7 9a.5.5 0 00.79 0l7-9a.5.5 0 00.034-.564L11.783 0z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgDiamond.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDiamond.displayName = "Diamond";

export default SvgDiamond;
