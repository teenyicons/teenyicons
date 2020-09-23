import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const SvgVim = forwardRef(
  ({ color = "currentColor", size = 15, ...props }, ref) => {
    return (
      <svg width={size} height={size} fill="none" ref={ref} {...props}>
        <path
          d="M1.5 3.5h1v10h3l8-10v-2h-5v2h2l-5 6v-6h1v-2h-5v2z"
          stroke={color}
        />
      </svg>
    );
  }
);

SvgVim.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SvgVim.displayName = "Vim";

export default SvgVim;
