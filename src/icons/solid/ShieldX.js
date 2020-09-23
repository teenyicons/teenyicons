import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShieldX = forwardRef(
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
          d="M7.252.066a.5.5 0 01.496 0l7 4A.5.5 0 0115 4.5v.72c0 4.532-3.005 8.516-7.363 9.76a.5.5 0 01-.274 0A10.152 10.152 0 010 5.22V4.5a.5.5 0 01.252-.434l7-4zm2.894 10.788L7.5 8.207l-2.646 2.647-.708-.707L6.793 7.5 4.146 4.854l.708-.708L7.5 6.793l2.646-2.647.708.708L8.207 7.5l2.647 2.646-.707.708z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgShieldX.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShieldX.displayName = "ShieldX";

export default SvgShieldX;
