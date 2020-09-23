import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgDeno = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-5H6a2.5 2.5 0 010-5h1.694a3.495 3.495 0 013.49 3.301L11.5 13.5M7 9.5h.382c.685 0 1.312-.387 1.618-1m-5-2h1m1 0h1"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgDeno.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgDeno.displayName = "Deno";

export default SvgDeno;
