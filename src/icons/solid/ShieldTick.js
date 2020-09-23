import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgShieldTick = forwardRef(
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
          d="M7.252.066a.5.5 0 01.496 0l7 4A.5.5 0 0115 4.5v.72c0 4.532-3.005 8.516-7.363 9.76a.5.5 0 01-.274 0A10.152 10.152 0 010 5.22V4.5a.5.5 0 01.252-.434l7-4zm-.18 10.645l4.318-5.399-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
          fill={color}
        />
      </svg>
    );
  }
);

SvgShieldTick.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgShieldTick.displayName = "ShieldTick";

export default SvgShieldTick;
