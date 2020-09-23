import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgReact = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3 3.134-3 7-3 7 1.343 7 3z"
          stroke={color}
        />
        <path
          d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726 1.841-3.4 2.153-6.795.696-7.584-1.457-.79-4.13 1.327-5.972 4.726-1.841 3.4-2.153 6.795-.696 7.584z"
          stroke={color}
        />
        <path
          d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726-1.841-3.4-2.153-6.795-.696-7.584 1.457-.79 4.13 1.327 5.972 4.726 1.841 3.4 2.153 6.795.696 7.584z"
          stroke={color}
        />
        <path d="M6.5 7.584a1 1 0 102 0 1 1 0 00-2 0z" stroke={color} />
      </svg>
    );
  }
);

SvgReact.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgReact.displayName = "React";

export default SvgReact;
