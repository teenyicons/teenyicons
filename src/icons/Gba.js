import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgGba = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M2 6.5h3m7 0h1m-2 2h1M3.5 5v3m1.606-5.5h4.788a2 2 0 011.11.336L12 3.5h.138a2 2 0 011.995 1.858l.32 4.475a1 1 0 01-.55.966l-2.091 1.045a3.175 3.175 0 01-.65.24 15.097 15.097 0 01-7.324 0 3.176 3.176 0 01-.65-.24l-2.09-1.045a1 1 0 01-.55-.966l.32-4.476A2 2 0 012.861 3.5H3l.996-.664a2 2 0 011.11-.336z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgGba.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgGba.displayName = "Gba";

export default SvgGba;
