import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgRedwoodjs = forwardRef(
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
          d="M7.252.066a.5.5 0 01.496 0l3.36 1.92L7.5 4.337 3.893 1.985 7.252.065zM3.185 2.718L1.96 4.25l2.24 2.24 2.386-1.556-3.4-2.217zM1.438 5.146L.52 8.363a.5.5 0 00.034.36l.054.11 2.735-1.784-1.904-1.903zM1.058 9.733l1.371 2.743 4.227-2.113-2.591-2.591-3.007 1.961zM3.277 13.17l4.02 1.787a.5.5 0 00.406 0l4.02-1.787L7.5 11.06 3.277 13.17zM12.57 12.476l1.372-2.743-3.007-1.961-2.59 2.591 4.226 2.113zM14.393 8.833l.054-.11a.5.5 0 00.034-.36l-.92-3.217-1.903 1.903 2.735 1.784zM13.041 4.251l-1.226-1.533-3.4 2.217 2.387 1.556 2.24-2.24zM7.5 5.532l2.58 1.682L7.5 9.793l-2.58-2.58L7.5 5.533z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgRedwoodjs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgRedwoodjs.displayName = "Redwoodjs";

export default SvgRedwoodjs;
